import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyProgram } from 'src/app/core/models/study_program';
import { shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudyProgramService {

  private baseUrl = '/api/v1/study-programs';
  private cache$: Observable<StudyProgram[]>;

  constructor(private httpClient: HttpClient) { }

  get studyPrograms() {
    if (!this.cache$) {
      this.cache$ = this.fetchStudyPrograms().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  fetchStudyPrograms() {
    this.cache$ = this.httpClient.get<StudyProgram[]>(this.baseUrl);
    return this.cache$;
  }

  getProgram(programId) {
    return this.httpClient.get<StudyProgram>(this.baseUrl + `/${programId}`);
  }

  createProgram(program: StudyProgram) {
    return this.httpClient.post<StudyProgram>(this.baseUrl, program);
  }

  editProgram(program: StudyProgram) {
    return this.httpClient.put<StudyProgram>(this.baseUrl + `/${program.id}`, program);
  }

  deleteProgram(programId) {
    return this.httpClient.delete(this.baseUrl + `/${programId}`);
  }
}
