import { TestBed } from '@angular/core/testing';
import { NewsService } from 'src/app/core/services/news.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });
});
