import { TestBed } from '@angular/core/testing';
import { RoleGuard } from './role.guard';
import { RouterModule } from '@angular/router';

describe('RoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuard],
      imports: [RouterModule]
    });
  });
});
