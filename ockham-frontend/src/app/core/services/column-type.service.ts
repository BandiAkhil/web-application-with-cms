import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnType } from 'src/app/core/models/column-type';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColumnTypeService {

  private baseUrl = '/api/v1/column-types';
  private cache$: Observable<ColumnType[]>;

  constructor(private httpClient: HttpClient) { }

  get columnTypes() {
    if (!this.cache$) {
      this.cache$ = this.fetchColumnTypes().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private fetchColumnTypes() {
    return this.httpClient.get<ColumnType[]>(this.baseUrl);
  }
}
