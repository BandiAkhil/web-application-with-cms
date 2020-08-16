import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/app/core/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = '/api/v1/news';

  constructor(private http: HttpClient) { }

  getNews(limit = -1) {
    if (limit === -1) {
      return this.http.get<News[]>(this.baseUrl);
    }
    return this.http.get<News[]>(this.baseUrl, {
      params: {limit: limit.toString()}
    });
  }

  getNewsItem(id: number | string) {
    return this.http.get<News>(`${this.baseUrl}/${id}`);
  }

  createNewsItem(data: FormData) {
    return this.http.post<News>(this.baseUrl, data);
  }

  updateNewsItem(data: FormData, id: number | string) {
    data.append('_method', 'put'); // Fake put needed for file upload
    return this.http.post<News>(`${this.baseUrl}/${id}`, data);
  }

  deleteNewsItem(id: number) {
    return this.http.delete<News>(`${this.baseUrl}/${id}`);
  }
}
