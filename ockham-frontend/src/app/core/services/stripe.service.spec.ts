import { TestBed } from '@angular/core/testing';
import { StripeService } from './stripe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StripeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));
});
