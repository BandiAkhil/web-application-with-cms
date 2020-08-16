import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';
import { NotifierService } from 'angular-notifier';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  submitted = false;

  constructor(
    private contactService: ContactService,
    private notifierService: NotifierService,
    private reCaptchaV3Service: ReCaptchaV3Service) {}

  ngOnInit() {
  }

  get f() { return this.contactForm.controls; }

  submitMessage() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.reCaptchaV3Service.execute('contact').subscribe(token => {
      const payload = cloneDeep(this.contactForm.value);
      payload.recaptcha_token = token;
      this.contactService.sendMessage(payload)
        .subscribe(() => {
          this.submitted = false;
          this.contactForm.reset();
          this.notifierService.notify('default', 'You message has been sent.');
        }, () => this.notifierService.notify('error', 'Something went wrong, please try again later.'));
    });
  }
}
