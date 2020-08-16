import { TestBed } from '@angular/core/testing';
import { DefaultBatchService } from 'src/app/core/services/default-batch.service';
import { HttpClientModule } from '@angular/common/http';

describe('ActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: DefaultBatchService = TestBed.get(DefaultBatchService);
    expect(service).toBeTruthy();
  });
});
