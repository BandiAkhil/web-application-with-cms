import { TestBed } from '@angular/core/testing';
import { ColumnService } from 'src/app/core/services/column.service';
import { HttpClientModule } from '@angular/common/http';

describe('ColumnService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ColumnService = TestBed.get(ColumnService);
    expect(service).toBeTruthy();
  });
});
