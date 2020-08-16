import { TestBed } from '@angular/core/testing';
import { ContributionService } from 'src/app/core/services/contribution.service';
import { HttpClientModule } from '@angular/common/http';

describe('ContributionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ContributionService = TestBed.get(ContributionService);
    expect(service).toBeTruthy();
  });
});
