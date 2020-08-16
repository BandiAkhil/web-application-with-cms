import { TestBed } from '@angular/core/testing';
import { ActivityService } from 'src/app/core/services/activity.service';
import { HttpClientModule } from '@angular/common/http';

describe('ActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ActivityService = TestBed.get(ActivityService);
    expect(service).toBeTruthy();
  });
});
