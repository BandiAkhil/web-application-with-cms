import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactRoutingModule } from 'src/app/modules/contact/contact-routing.module';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { ContactFormComponent } from 'src/app/modules/contact/contact-form/contact-form.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    RecaptchaV3Module
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Lf0e98UAAAAAMh4Xsu8b5iIr40bmnYT4KfpS4ID' }, // TODO: change site key!
  ],
})
export class ContactModule { }
