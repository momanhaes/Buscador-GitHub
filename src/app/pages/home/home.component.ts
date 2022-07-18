import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ALERT_THEME } from 'src/app/utils/theme';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { GithubService } from 'src/app/services/github.service';
import { WindowService } from 'src/app/services/window.service';
import { IProfile, IRepo } from 'src/app/components/profile/profile.interface';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [APPEARD],
})
export class HomeComponent implements OnInit {
  public person: IProfile = {} as IProfile;
  public subscribeMobile!: Subscription;
  public repos: IRepo[] = [];
  
  public userForm!: FormGroup;
  public repoForm!: FormGroup;

  public isUserLoading: boolean = false;
  public isRepoLoading: boolean = false;
  public isRepo: boolean = false;
  public isMobile: boolean;
  
  public alertTheme = ALERT_THEME;
  public searchTerm!: string;
  public user: string = '';
  public state = 'ready';

  constructor(
    private router: Router,
    private githubService: GithubService,
    private windowService: WindowService,
  ) { this.isMobile = window.innerWidth <= windowService.widthMobile; }

  ngOnInit() {
    this.userForm = new FormGroup({ userControl: new FormControl('') });
    this.repoForm = new FormGroup({ repoControl: new FormControl('') });

    this.subscribeMobile = this.windowService.hasMobile.subscribe((hasMobile: boolean) => (this.isMobile = hasMobile));

    this.getUser();
    this.filterRepos();
  }

  public getUser(): void {
    this.userForm.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((user) => {
          this.isUserLoading = true;
          this.user = user.userControl;
          return this.githubService.getUser(this.user);
        }),
        catchError((err) => {
          setTimeout(() => {
            this.isUserLoading = false;
            this.person = {} as IProfile;

            Swal.fire({
              title: 'Ops!',
              text: `Não foi encontrado um perfil para '${this.user}'`,
              icon: 'error',
              background: this.alertTheme.background,
              iconColor: this.alertTheme.iconColor,
              showCancelButton: false,
              confirmButtonColor: this.alertTheme.confirmButtonColor,
              confirmButtonText: 'Ok',
            }).then(() => window.location.reload());

          }, 1000);

          return err;
        })
      )
      .subscribe((person: any) => {
        setTimeout(() => {
          this.person = person;
          this.isUserLoading = false;
        }, 1000);
      });
  }

  public filterRepos(): void {
    this.repoForm.valueChanges.subscribe((searchTerm) => {
      this.searchTerm = searchTerm.repoControl;

      const result: IRepo[] = this.repos.filter(
        (item) =>
          item.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.language?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.forks?.toString().includes(this.searchTerm)
      );

      this.githubService.updateTable(result, this.searchTerm);
    });
  }

  public goProfile(): void {
    this.isRepo = false;
  }

  public goRepos(user: string): void {
    this.isRepoLoading = true;

    if (!user) return;

    setTimeout(() => {
      this.githubService.getUserRepos(user).subscribe((repos) => {
        this.repos = repos;
        this.isRepo = true;
        this.isRepoLoading = false;
      });
    }, 1000);
  }
}
