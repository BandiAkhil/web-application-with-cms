import { TestBed } from '@angular/core/testing';
import { CommitteeService } from 'src/app/core/services/committee.service';
import { HttpClientModule } from '@angular/common/http';

describe('CommitteeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CommitteeService = TestBed.get(CommitteeService);
    expect(service).toBeTruthy();
  });
});
