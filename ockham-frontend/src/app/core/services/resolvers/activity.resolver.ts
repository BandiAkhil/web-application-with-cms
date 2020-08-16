import { Injectable } from '@angular/core';
import { ActivityService } from 'src/app/core/services/activity.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Activity } from 'src/app/core/models/activity';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Injectable({ providedIn: 'root' })
export class ActivityResolver implements Resolve<Activity> {
  constructor(
      private service: ActivityService,
      private notifier: NotifierService,
      private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.service.getActivity(parseInt(route.paramMap.get('id'))).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          // TODO check what status code and provide message based on status code
          this.notifier.notify('error', 'An error has occured while fetching activity');
        }
        this.router.navigate(['']);
        return throwError(err);
      })
    );
  }
}
