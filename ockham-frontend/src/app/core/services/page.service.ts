import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from 'src/app/core/models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private baseUrl = '/api/v1/pages';

  constructor(private http: HttpClient) { }

  getPages() {
    return this.http.get<Page[]>(this.baseUrl);
  }

  getPage(slug: string) {
    return this.http.get<Page>(`${this.baseUrl}/${slug}`);
  }

  createPage(page: FormData) {
    return this.http.post<FormData>(this.baseUrl, page);
  }

  updatePage(page: FormData, slug: string) {
    page.append('_method', 'put'); // Fake put needed for file upload
    return this.http.post<FormData>(`${this.baseUrl}/${slug}`, page);
  }

  deletePage(slug: string) {
    return this.http.delete<void>(`${this.baseUrl}/${slug}`);
  }
}
