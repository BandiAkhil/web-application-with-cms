import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountComponent } from './account.component';
import { AccountInformationComponent } from 'src/app/modules/account/account-information/account-information.component';
import { ChangePasswordComponent } from 'src/app/modules/account/change-password/change-password.component';
import { MailingListsComponent } from 'src/app/modules/account/mailing-lists/mailing-lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent, AccountInformationComponent, ChangePasswordComponent, MailingListsComponent],
      imports: [FormsModule, ReactiveFormsModule, NotifierModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
