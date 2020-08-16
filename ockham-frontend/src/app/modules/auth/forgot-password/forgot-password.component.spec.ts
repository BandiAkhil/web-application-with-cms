import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordComponent } from 'src/app/modules/auth/forgot-password/forgot-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotifierModule } from 'angular-notifier';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      imports: [ SharedModule, NotifierModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
