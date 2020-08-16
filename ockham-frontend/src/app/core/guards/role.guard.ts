import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const requiredRole = route.data.role as string;

    return new Promise(resolve => {
      this.authService.hasRole(requiredRole).then(hasRole => {
        if (hasRole) {
          resolve(true);
        } else {
          this.router.navigate(['/']);
          resolve(false);
        }
      }, () => resolve(false));
    });
  }
}
