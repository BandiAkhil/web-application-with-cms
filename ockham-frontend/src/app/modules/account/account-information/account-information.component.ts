import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/core/models/member';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MemberService } from 'src/app/core/services/member.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {

  user: Member;

  accountForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    insertion: new FormControl(''),
    last_name: new FormControl('', Validators.required),
    initials: new FormControl('', Validators.required),
    phone_number: new FormControl(''),
    address: new FormControl(''),
    zip_code: new FormControl(''),
    residence: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submitted = false;

  constructor(private notifierService: NotifierService,
              private authService: AuthenticationService,
              private memberService: MemberService) { }

  ngOnInit() {
    this.authService.user
      .subscribe(user => {
        this.user = user;
        this.accountForm.patchValue(user);
      });
  }

  get f() { return this.accountForm.controls; }

  onUpdate() {
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }

    const user: Member = Object.assign(cloneDeep(this.user), this.accountForm.value);

    this.memberService.updateMember(user, user.id)
      .subscribe(member => {
        this.notifierService.notify('success', 'Your account has been updated.');
        this.authService.setUser(member);
      }, () => {
        this.notifierService.notify('error', 'Could not update account, try again later.');
      });
  }

}
