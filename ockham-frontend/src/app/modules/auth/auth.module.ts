import { NgModule } from '@angular/core';
import { AuthRoutingModule } from 'src/app/modules/auth/auth-routing.module';
import { AuthComponent } from 'src/app/modules/auth/auth.component';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordComponent } from 'src/app/modules/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/modules/auth/reset-password/reset-password.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
