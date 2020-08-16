import { TestBed } from '@angular/core/testing';
import { PageService } from 'src/app/core/services/page.service';
import { HttpClientModule } from '@angular/common/http';

describe('PageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: PageService = TestBed.get(PageService);
    expect(service).toBeTruthy();
  });
});
