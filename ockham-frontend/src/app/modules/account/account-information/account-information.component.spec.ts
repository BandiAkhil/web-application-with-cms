import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AccountInformationComponent } from './account-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { authServiceStub } from 'src/app/core/mocks/auth-service-stub';
import { MemberService } from 'src/app/core/services/member.service';
import { memberServiceStub } from 'src/app/core/mocks/member-service-stub';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AccountInformationComponent', () => {
  let component: AccountInformationComponent;
  let fixture: ComponentFixture<AccountInformationComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AccountInformationComponent],
      imports: [ ReactiveFormsModule, NotifierModule, HttpClientTestingModule],
      providers: [{ provide: AuthenticationService, useValue: authServiceStub }, { provide: MemberService, useValue: memberServiceStub}],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AccountInformationComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create',() => { 
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
