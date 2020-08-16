import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityWrapperComponent } from 'src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActivityWrapperComponent', () => {
  let component: ActivityWrapperComponent;
  let fixture: ComponentFixture<ActivityWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityWrapperComponent ],
      imports: [SharedModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
