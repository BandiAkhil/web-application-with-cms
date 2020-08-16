import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MemberService } from 'src/app/core/services/member.service';
import { NotifierService } from 'angular-notifier';
import { samePasswords } from 'src/app/shared/validators/same-passwords.validator';
import { strongPassword } from 'src/app/shared/validators/strong-password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm = new FormGroup({
    old_password: new FormControl('', Validators.required),
    new_password: new FormControl('', [Validators.required, Validators.minLength(8), strongPassword]),
    repeat_new_password: new FormControl('', [Validators.required, Validators.minLength(8), strongPassword])
  }, { validators: samePasswords });
  submitted = false;

  constructor(
    private authService: AuthenticationService,
    private memberService: MemberService,
    private notifierService: NotifierService) { }

  ngOnInit() {
  }

  get f() { return this.passwordForm.controls; }

  onChangePassword() {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      return;
    }

    const data = cloneDeep(this.passwordForm.value);
    delete data.repeat_password; // Not needed

    this.authService.user
      .subscribe(u => {
        this.memberService.changePassword(u, data)
          .subscribe(() => {
            this.notifierService.notify('success', 'Your password has been changed.');
          }, () =>  {
            this.notifierService.notify('error', 'The old password is incorrect.');
          });
      });
  }
}
