import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadedFileService {

  private baseUrl = '/api/v1/uploaded-files';

  constructor(private http: HttpClient) { }

  deleteFile(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
