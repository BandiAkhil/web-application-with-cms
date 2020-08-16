import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityManagementComponent } from 'src/app/modules/admin/activity-management/activity-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { authServiceStub } from 'src/app/core/mocks/auth-service-stub';
import { RouterTestingModule } from '@angular/router/testing';
import { MemberService } from 'src/app/core/services/member.service';
import { memberServiceStub } from 'src/app/core/mocks/member-service-stub';
import { ActivityService } from 'src/app/core/services/activity.service';
import { activityServiceStub } from 'src/app/core/mocks/activity-service-stub';
import { NotifierModule } from 'angular-notifier';

describe('ActivityManagementComponent', () => {
  let component: ActivityManagementComponent;
  let fixture: ComponentFixture<ActivityManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityManagementComponent],
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule, NotifierModule],
      providers: [
        { provide: AuthenticationService, useValue: authServiceStub },
        { provide: MemberService, useValue: memberServiceStub },
        { provide: ActivityService, useValue: activityServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
