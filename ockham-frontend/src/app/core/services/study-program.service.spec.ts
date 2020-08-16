import { TestBed } from '@angular/core/testing';
import { StudyProgramService } from 'src/app/core/services/study-program.service';
import { HttpClientModule } from '@angular/common/http';

describe('StudyProgramService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: StudyProgramService = TestBed.get(StudyProgramService);
    expect(service).toBeTruthy();
  });
});
