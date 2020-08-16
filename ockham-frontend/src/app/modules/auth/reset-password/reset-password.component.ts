import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { samePasswords } from 'src/app/shared/validators/same-passwords.validator';
import { strongPassword } from 'src/app/shared/validators/strong-password.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  passwordForm = new FormGroup({
    new_password: new FormControl('', [Validators.required, Validators.minLength(8), strongPassword]),
    repeat_new_password: new FormControl('', [Validators.required, Validators.minLength(8), strongPassword])
  }, { validators: samePasswords });
  submitted = false;
  token: string;

  constructor(
    private authService: AuthenticationService,
    private notifierService: NotifierService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('token');
    });
  }

  get f() { return this.passwordForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      return;
    }

    const new_password = this.passwordForm.value.new_password;
    this.authService.resetPassword(this.token, new_password).pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['']).then(() => {
            this.notifierService.notify('success', 'Your password has been changed successfully.');
          });
        },
        () => {
          this.notifierService.notify('error', 'The password reset token is invalid. Please request another password reset and try again.');
        }
      );
  }
}
