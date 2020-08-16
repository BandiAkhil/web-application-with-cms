import { TestBed } from '@angular/core/testing';
import { RoleService } from 'src/app/core/services/role.service';
import { HttpClientModule } from '@angular/common/http';

describe('RoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: RoleService = TestBed.get(RoleService);
    expect(service).toBeTruthy();
  });
});
