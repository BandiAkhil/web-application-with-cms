import { PageService } from 'src/app/core/services/page.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Page } from 'src/app/core/models/page';
import { NotifierService } from 'angular-notifier';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PageResolver implements Resolve<Page> {

  constructor(
      private service: PageService,
      private notifier: NotifierService,
      private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.service.getPage(route.paramMap.get('slug')).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          this.notifier.notify('warning', 'Page does not exist.');
        }
        this.router.navigate(['']);
        return throwError(err);
      })
    );
  }
}
