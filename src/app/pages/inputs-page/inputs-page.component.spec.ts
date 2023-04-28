import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputsPageComponent } from './inputs-page.component';

describe('InputPageComponent', () => {
  let component: InputsPageComponent;
  let fixture: ComponentFixture<InputsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ InputsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
