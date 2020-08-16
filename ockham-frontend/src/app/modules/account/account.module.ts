import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from 'src/app/modules/account/account-routing.module';
import { AccountComponent } from 'src/app/modules/account/account.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangePasswordComponent } from 'src/app/modules/account/change-password/change-password.component';
import { AccountInformationComponent } from 'src/app/modules/account/account-information/account-information.component';
import { MailingListsComponent } from 'src/app/modules/account/mailing-lists/mailing-lists.component';


@NgModule({
  declarations: [AccountComponent, ChangePasswordComponent, AccountInformationComponent, MailingListsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
