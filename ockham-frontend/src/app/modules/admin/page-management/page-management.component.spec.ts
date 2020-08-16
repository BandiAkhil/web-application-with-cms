import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageManagementComponent } from 'src/app/modules/admin/page-management/page-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { PageGroupService } from 'src/app/core/services/page-group.service';
import { PageGroupStubService } from 'src/app/core/mocks/page-group-stub';

describe('PageManagementComponent', () => {
  let component: PageManagementComponent;
  let fixture: ComponentFixture<PageManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageManagementComponent ],
      imports: [ SharedModule, NgbModule, HttpClientTestingModule, RouterTestingModule, NotifierModule ],
      providers: [{ provide: PageGroupService, useValue: PageGroupStubService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
