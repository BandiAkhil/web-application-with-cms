import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  submitted = false;

  constructor(private authService: AuthenticationService, private notifierService: NotifierService) { }

  ngOnInit() {
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const email = this.form.value.email;
    this.authService.requestPasswordReset(email)
      .subscribe(() => {
        this.submitted = false;
        this.form.reset();
        this.notifierService.notify('default', `An email has been sent to ${email} with further instructions.`);
      }, () => {
        this.notifierService.notify('error', 'Your password could not be reset, try again later.');
      });
  }
}
