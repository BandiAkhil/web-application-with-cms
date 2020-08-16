import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageGroupModalComponent } from 'src/app/modules/admin/page-management/components/page-group-modal/page-group-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';
import { PageGroupService } from 'src/app/core/services/page-group.service';
import { PageGroupStubService } from 'src/app/core/mocks/page-group-stub';

describe('PageGroupModalComponent', () => {
  let component: PageGroupModalComponent;
  let fixture: ComponentFixture<PageGroupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGroupModalComponent ],
      imports: [ SharedModule, HttpClientTestingModule, NotifierModule ],
      providers: [NgbActiveModal, { provide: PageGroupService, useValue: PageGroupStubService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
