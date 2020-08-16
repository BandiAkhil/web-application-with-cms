import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from 'src/app/modules/activities/activities.component';
import { ActivitiesCalendarComponent } from 'src/app/modules/activities/pages/activities-calendar/activities-calendar.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ActivityDetailComponent } from 'src/app/modules/activities/pages/activity-detail/activity-detail.component';
import { ActivityResolver } from 'src/app/core/services/resolvers/activity.resolver';
import { UpcomingActivitiesComponent } from 'src/app/modules/activities/pages/upcoming-activities/upcoming-activities.component';
import { MyRegistrationsComponent } from 'src/app/modules/activities/pages/my-registrations/my-registrations.component';
import {PaymentIntentResolver} from 'src/app/core/services/resolvers/payment-intent.resolver';

const routes: Routes =
  [
    {
      path: '',
      component: ActivitiesComponent,
      children: [
        {
          path: '',
          component: UpcomingActivitiesComponent
        },
        {
          path: 'activities_calendar',
          component: ActivitiesCalendarComponent
        },
        {
          path: 'my_registrations',
          canActivate: [AuthGuard],
          component: MyRegistrationsComponent
        }
      ]
    },
    {
      path: ':id',
      component: ActivityDetailComponent,
      resolve: {
        activity: ActivityResolver,
        paymentIntent: PaymentIntentResolver
      }
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
