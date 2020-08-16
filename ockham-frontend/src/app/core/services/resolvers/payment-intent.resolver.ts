import {Injectable} from '@angular/core';
import {ActivityService} from '../activity.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router, ActivatedRoute} from '@angular/router';
import {Observable, of, throwError, zip} from 'rxjs';
import {Activity, ActivityRegistration} from '../../models/activity';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {NotifierService} from 'angular-notifier';
import {PaymentIntent} from 'src/app/core/models/payment-intent';
import {StripeService} from 'src/app/core/services/stripe.service';

@Injectable({providedIn: 'root'})
export class PaymentIntentResolver implements Resolve<PaymentIntent> {
  constructor(
    private activityService: ActivityService,
    private notifier: NotifierService,
    private stripeService: StripeService,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    if (!route.queryParamMap.has('payment_intent_client_secret')) return of(null);
    return this.stripeService.handlePaymentIntent(route.queryParamMap.get('payment_intent')).pipe(map(value => {
      if (value.status === 'succeeded') {
        this.notifier.notify('success', 'Payment successful!');
      }
      else {
        this.notifier.notify('error', 'Payment failed: ' + value.status + '. Activity registration was cancelled.');
      }
      // Remove query params
      this.router.navigateByUrl('/activities/' + value.activity_id);
    }));
  }
}
