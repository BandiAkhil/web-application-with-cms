import { TestBed } from '@angular/core/testing';
import { UploadedFileService } from 'src/app/core/services/uploaded-file.service';
import { HttpClientModule } from '@angular/common/http';

describe('UploadedFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: UploadedFileService = TestBed.get(UploadedFileService);
    expect(service).toBeTruthy();
  });
});
