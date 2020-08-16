import { Injectable } from '@angular/core';
import { MailingList } from 'src/app/core/models/mailing_list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailingListService {

  private baseUrl = 'api/v1/mailing-lists';
  private cache$: Observable<MailingList[]>;

  constructor(private http: HttpClient) { }

  get mailingLists() {
    if (!this.cache$) {
      this.cache$ = this.fetchMailingLists().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  fetchMailingLists() {
    return this.http.get<MailingList[]>(this.baseUrl);
  }

  subscribeToMailingList(listId: string) {
    return this.http.post<any>(`${this.baseUrl}/${listId}/subscribe`, null);
  }

  unsubscribeFromMailingList(listId: string) {
    return this.http.post<any>(`${this.baseUrl}/${listId}/unsubscribe`, null);
  }
}
