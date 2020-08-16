import { TestBed } from '@angular/core/testing';
import { CustomEventFormatterService } from 'src/app/core/services/custom-event-formatter.service';
import { HttpClientModule } from '@angular/common/http';

describe('CustomEventFormatter', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [CustomEventFormatterService]
  }));

  it('should be created', () => {
    const service: CustomEventFormatterService = TestBed.get(CustomEventFormatterService);
    expect(service).toBeTruthy();
  });
});
