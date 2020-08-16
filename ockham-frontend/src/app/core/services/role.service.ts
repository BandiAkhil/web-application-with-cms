import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from 'src/app/core/models/role';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = '/api/v1/roles';
  private cache$: Observable<Role[]>;

  constructor(private httpClient: HttpClient) { }

  get roles() {
    if (!this.cache$) {
      this.cache$ = this.fetchRoles().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private fetchRoles() {
    return this.httpClient.get<Role[]>(this.baseUrl);
  }
}
