import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { PageGroupService } from 'src/app/core/services/page-group.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('PageGroupService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let pageGroupService: PageGroupService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: []
  }));

});
