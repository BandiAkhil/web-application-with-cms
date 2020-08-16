import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Committee } from 'src/app/core/models/committee';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

  private baseUrl = '/api/v1/committees';
  private cache$: Observable<Committee[]>;

  constructor(private http: HttpClient) { }

  get committees() {
    if (!this.cache$) {
      this.cache$ = this.fetchCommittees().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  fetchCommittees() {
    return this.http.get<Committee[]>(this.baseUrl);
  }

  getCommittee(committeeId: number) {
    return this.http.get<Committee>(this.baseUrl + `/${committeeId}`);
  }

  createCommittee(committee: Committee) {
    return this.http.post<Committee>(this.baseUrl, committee);
  }

  updateCommittee(committee: Committee) {
    return this.http.put<Committee>(this.baseUrl + `/${committee.id}`, committee);
  }

  deleteCommittee(committeeId: number) {
    return this.http.delete<Committee>(this.baseUrl + `/${committeeId}`);
  }
}
