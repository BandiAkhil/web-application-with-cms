import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Column } from 'src/app/core/models/column';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  private baseUrl = '/api/v1/columns';
  private cache$: Observable<Column[]>[] = [];

  constructor(private http: HttpClient) { }

  getColumns(model: string, useCache = true): Observable<Column[]> {
    if (!(model in this.cache$) || !useCache) {
      this.cache$[model] = this.fetchColumns(model).pipe(shareReplay(1));
    }
    return this.cache$[model];
  }

  private fetchColumns(model: string): Observable<Column[]> {
    return this.http.get<Column[]>(`${this.baseUrl}/${model}`);
  }

  getColumn(model: string, id: number | string): Observable<Column> {
    return this.http.get<Column>(`${this.baseUrl}/${model}/${id}`);
  }

  createColumn(model: string, column: Column): Observable<Column> {
    return this.http.post<Column>(`${this.baseUrl}/${model}`, column);
  }

  updateColumn(model: string, column: Column, id: number | string): Observable<Column> {
    return this.http.put<Column>(`${this.baseUrl}/${model}/${id}`, column);
  }

  deleteColumn(model: string, id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${model}/${id}`);
  }
}
