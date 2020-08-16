import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { PageGroup } from 'src/app/core/models/page_group';

@Injectable({
  providedIn: 'root'
})
export class PageGroupService {

  private baseUrl = '/api/v1/page-groups';
  private pageGroups$: BehaviorSubject<PageGroup[]>;

  constructor(private http: HttpClient) {
    this.pageGroups$ = new BehaviorSubject<PageGroup[]>([]);

    this.fetchPageGroups().subscribe(pageGroups => {
      this.pageGroups$.next(pageGroups);
    });
  }

  get pageGroups(): Observable<PageGroup[]> {
    return this.pageGroups$.asObservable();
  }

  setPageGroups(pageGroups: PageGroup[]) {
    this.pageGroups$.next(pageGroups);
  }

  fetchPageGroups() {
    return this.http.get<PageGroup[]>(this.baseUrl);
  }

  fetchAndSetPageGroups() {
    this.fetchPageGroups().subscribe(pageGroups => {
      this.setPageGroups(pageGroups);
    });
  }

  getPageGroup(id: number | string) {
    return this.http.get<PageGroup>(`${this.baseUrl}/${id}`);
  }

  createPageGroup(pageGroup: PageGroup) {
    return this.http.post<PageGroup>(this.baseUrl, pageGroup);
  }

  updatePageGroup(pageGroup: any, id: number | string) {
    return this.http.put<PageGroup>(`${this.baseUrl}/${id}`, pageGroup);
  }

  deletePageGroup(id: number | string) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
