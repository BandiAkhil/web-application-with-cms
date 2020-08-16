import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = '/api/v1/contact';

  constructor(private httpClient: HttpClient) { }

  public sendMessage(obj) {
    return this.httpClient.post(this.baseUrl, obj, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    });
  }
}
