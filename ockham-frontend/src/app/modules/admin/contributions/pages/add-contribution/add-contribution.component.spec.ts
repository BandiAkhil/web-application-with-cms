import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddContributionComponent } from 'src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';
import { ContributionFormComponent } from 'src/app/modules/admin/members/contribution-modal/contribution-form/contribution-form.component';

describe('AddContributionComponent', () => {
  let component: AddContributionComponent;
  let fixture: ComponentFixture<AddContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContributionComponent, ContributionFormComponent ],
      imports: [ SharedModule, RouterTestingModule, HttpClientTestingModule, NotifierModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
