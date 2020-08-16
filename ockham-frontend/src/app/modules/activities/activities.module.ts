import { NgModule } from '@angular/core';
import { ActivitiesRoutingModule } from 'src/app/modules/activities/activities-routing.module';
import { ActivitiesComponent } from 'src/app/modules/activities/activities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivitiesCalendarComponent } from 'src/app/modules/activities/pages/activities-calendar/activities-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ActivityDetailComponent } from 'src/app/modules/activities/pages/activity-detail/activity-detail.component';
import { UpcomingActivitiesComponent } from 'src/app/modules/activities/pages/upcoming-activities/upcoming-activities.component';
import { MyRegistrationsComponent } from 'src/app/modules/activities/pages/my-registrations/my-registrations.component';


@NgModule({
  declarations: [ActivitiesComponent, ActivitiesCalendarComponent, ActivityDetailComponent, UpcomingActivitiesComponent, MyRegistrationsComponent],
  imports: [
    ActivitiesRoutingModule,
    SharedModule,
    NgbPaginationModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [AuthGuard]
})
export class ActivitiesModule { }
