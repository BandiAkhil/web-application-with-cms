import { TestBed } from '@angular/core/testing';
import { ContactService } from 'src/app/core/services/contact.service';
import { HttpClientModule } from '@angular/common/http';

describe('ContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });
});
