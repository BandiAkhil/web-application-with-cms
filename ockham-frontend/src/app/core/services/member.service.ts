import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Member } from 'src/app/core/models/member';
import { Committee } from 'src/app/core/models/committee';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Filter } from 'src/app/core/models/filter';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = '/api/v1/members';
  private committeesCache$: Observable<Committee[]>;

  constructor(private http: HttpClient) { }

  getMembers(filter: Filter) {
    let params: HttpParams = new HttpParams();

    if ('limit' in filter && 'offset' in filter) {
      params = params.append('offset', filter.offset.toString());
      params = params.append('limit', filter.limit.toString());
    }

    if ('term' in filter) {
      params = params.append('q', filter.term);
    }

    return this.http.get<any>(this.baseUrl, { params });
  }

  getMember(id: number | string) {
    return this.http.get<Member>(`${this.baseUrl}/${id}`);
  }

  getMembersExport() {
    return this.http.get(`${this.baseUrl}/export`, {
      responseType: 'arraybuffer', observe: 'response'
    });
  }

  createMember(member: Member) {
    return this.http.post<Member>(this.baseUrl, member);
  }

  changePassword(member: Member, data: any) {
    return this.http.post<any>(`${this.baseUrl}/${member.id}/password`, data);
  }

  importMembers(file: File) {
    const formData: FormData = new FormData();
    formData.append('data', file, file.name);
    return this.http.post<any>(`${this.baseUrl}/import`, formData);
  }

  updateMember(member: Member, id: number | string) {
    return this.http.put<Member>(`${this.baseUrl}/${id}`, member);
  }

  deleteMember(id: number | string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  archiveMember(id: number | string) {
    return this.http.post(`${this.baseUrl}/${id}/archive`, null);
  }

  getRegistrations(member: Member, upcomingOnly?: string) {
    const params = upcomingOnly ? new HttpParams().set('upcoming_only', upcomingOnly) : null;
    return this.http.get<any>(`${this.baseUrl}/${member.id}/registrations`, {params});
  }

  getMemberCommittees(id: number | string): Observable<Committee[]> {
    if (!this.committeesCache$) {
      this.committeesCache$ = this.fetchMemberCommittees(id).pipe(shareReplay(1));
    }
    return this.committeesCache$;
  }

  fetchMemberCommittees(id: number | string): Observable<Committee[]> {
    return this.http.get<Committee[]>(`${this.baseUrl}/${id}/committees`);
  }

  clearMemberCommitteesCache() {
    this.committeesCache$ = null;
  }

  getContributions(member: Member) {
    return this.http.get<any>(`${this.baseUrl}/${member.id}/contributions`);
  }

  deleteContribution(memberId: number, contId: number) {
    return this.http.delete(this.baseUrl + `/${memberId}/contributions/${contId}`);
  }

  addContribution(member: Member, cont: any) {
    return this.http.post(this.baseUrl + `/${member.id}/contributions`, cont);
  }

  editContribution(memberId, cont: any) {
    return this.http.put(this.baseUrl + `/${memberId}/contributions/${cont.contribution_id}`, cont);
  }
}
