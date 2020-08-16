import { TestBed } from '@angular/core/testing';
import { ColumnTypeService } from 'src/app/core/services/column-type.service';
import { HttpClientModule } from '@angular/common/http';

describe('ColumnTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ColumnTypeService = TestBed.get(ColumnTypeService);
    expect(service).toBeTruthy();
  });
});
