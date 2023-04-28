import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographyPageComponent } from './typography-page.component';

describe('TypographyPageComponent', () => {
  let component: TypographyPageComponent;
  let fixture: ComponentFixture<TypographyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ TypographyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
