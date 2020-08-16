import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributionModalComponent } from 'src/app/modules/admin/members/contribution-modal/contribution-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContributionFormComponent } from 'src/app/modules/admin/members/contribution-modal/contribution-form/contribution-form.component';
import { PaidContributionsComponent } from 'src/app/modules/admin/members/contribution-modal/paid-contributions/paid-contributions.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';

describe('ContributionModalComponent', () => {
  let component: ContributionModalComponent;
  let fixture: ComponentFixture<ContributionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionModalComponent, ContributionFormComponent, PaidContributionsComponent ],
      imports: [ SharedModule, HttpClientTestingModule, NotifierModule ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
