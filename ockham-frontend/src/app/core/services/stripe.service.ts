import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PaymentIntent} from 'src/app/core/models/payment-intent';
import {from, Observable, of} from 'rxjs';
// @ts-ignore
import Stripe from 'stripe';
import {environment} from 'src/environments/environment.prod';
import {Activity, ActivityRegistration} from 'src/app/core/models/activity';

declare var Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  baseUrl = '/api/v1/stripe';

  stripe = Stripe(environment.stripeKey);

  constructor(private http: HttpClient) {
  }

  createActivityPayment(registrationId: number): Observable<PaymentIntent> {
    return this.http.post(this.baseUrl, {registration_id: registrationId}).pipe(map(value => {
      return {id: value['id'], amount: value['amount'], clientSecret: value['client_secret'], status: value['status'], metadata: value['metadata']} as PaymentIntent;
    }));
  }

  handlePaymentIntent(intentClientSecret: string): Observable<{status: string, activity_id: number, registration_id: number}> {
    return this.http.get(this.baseUrl + '/' + intentClientSecret).pipe(map(value => {
      console.log(value);
      return {status: value['status'], activity_id: value['activity_id'], registration_id: value['registration_id']};
    }));
  }
}

