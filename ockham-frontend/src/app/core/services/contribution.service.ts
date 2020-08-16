import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contribution } from 'src/app/core/models/contribution';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  private baseUrl = '/api/v1/contributions';

  constructor(private http: HttpClient) { }

  getContributions() {
    return this.http.get<Contribution[]>(this.baseUrl);
  }

  getContributionExport(id: number | string, data: any) {
    return this.http.get(`${this.baseUrl}/${id}/export`, {
      responseType: 'arraybuffer', observe: 'response',
      params: data
    });
  }

  getContribution(id: number | string) {
    return this.http.get<Contribution>(`${this.baseUrl}/${id}`);
  }

  createContribution(contribution: Contribution) {
    return this.http.post<Contribution>(this.baseUrl, contribution);
  }

  updateContribution(contribution: Contribution, id: number | string) {
    return this.http.put<Contribution>(`${this.baseUrl}/${id}`, contribution);
  }

  deleteContribution(id: number | string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
