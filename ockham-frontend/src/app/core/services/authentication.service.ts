import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { Member } from 'src/app/core/models/member';
import { MemberService } from 'src/app/core/services/member.service';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = '/api/v1/auth/';
  private authenticated$: BehaviorSubject<boolean>;
  private currentUser$: BehaviorSubject<Member>;

  private roles = ['general_member', 'committee_member', 'board', 'admin'];

  constructor(private http: HttpClient, private memberService: MemberService) {
    this.authenticated$ = new BehaviorSubject<boolean>(this.getToken() !== null);
    this.currentUser$ = new BehaviorSubject<Member>(this._getUser());

    if (this.isTokenExpired()) {
      this.logout();
    }
  }

  login(email: string, password: string) {
    return this.authenticate('login', { email, password });
  }

  authenticate(endpoint: 'password-reset' | 'login', payload: any) {
    return this.http.post<any>(this.baseUrl + endpoint, payload).pipe(
      switchMap(response => {
        const token = response.token;
        // save token in local storage
        localStorage.setItem('token', token);

        return this.http.get<Member>(this.baseUrl + 'me').pipe(
          map((res) => {
            this.setUser(res);
            this.currentUser$.next(res);
            this.authenticated$.next(true);
          })
        );

      })
    );
  }

  requestPasswordReset(email: string) {
    return this.http.post<any>(this.baseUrl + 'password-reset/request', { email });
  }

  resetPassword(token: string, newPassword: string) {
    return this.authenticate('password-reset', { token, new_password: newPassword });
  }

  hasRole(role: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!role || !this.isAuthenticated()) {
        return false;
      }

      const user = this._getUser();
      let userRole = user.role.name;

      this.memberService.getMemberCommittees(user.id).subscribe(committees => {
        if (userRole === 'general_member' && committees.length > 0) {
          userRole = 'committee_member';
        }

        const userRoleIndex = this.roles.indexOf(userRole);
        const requiredRoleIndex = this.roles.indexOf(role);

        if (userRoleIndex === -1 || requiredRoleIndex === -1) {
          resolve(false);
        }
        resolve(userRoleIndex >= requiredRoleIndex);
      }, error => reject(error));
    });
  }

  get user(): Observable<Member> {
    return this.currentUser$.asObservable();
  }

  _getUser(): Member {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: Member) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser$.next(user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isTokenExpired() {
    let decoded;
    try {
      decoded = jwt_decode(this.getToken());
    } catch (Error) {
      return true;
    }

    if (decoded.exp === undefined) {
      return true;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date.valueOf() <= new Date().valueOf();
  }

  logout() {
    localStorage.clear();
    this.authenticated$.next(false);
    this.memberService.clearMemberCommitteesCache();
  }

  isAuthenticated(): boolean {
    return this.authenticated$.value;
  }

  isAuthenticatedObs(): Observable<boolean> {
    return this.authenticated$.asObservable();
  }
}
