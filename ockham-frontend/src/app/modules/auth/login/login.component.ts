import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  redirect: string;
  submitted = false;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.route.queryParamMap.subscribe(params => {
      this.redirect = params.get('redirect');
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        () => {
          if (this.redirect) {
            this.router.navigate([this.redirect]);
          } else {
            this.router.navigate(['']);
          }
          this.submitted = false;
          this.router.navigate(['']);
        },
        () => {
          this.notifierService.notify('error', 'Email or password incorrect');
        }
      );
  }

}
