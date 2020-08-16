import { TestBed } from '@angular/core/testing';
import { MailingListService } from 'src/app/core/services/mailing-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('MailingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: MailingListService = TestBed.get(MailingListService);
    expect(service).toBeTruthy();
  });
});
