import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddActivityComponent } from 'src/app/modules/admin/activity-management/pages/add-activity/add-activity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityFormComponent } from 'src/app/modules/admin/activity-management/components/activity-form/activity-form.component';
import { OptionFormComponent } from 'src/app/modules/admin/activity-management/components/option-form/option-form.component';
import { OptionListComponent } from 'src/app/modules/admin/activity-management/components/option-list/option-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddActivityComponent', () => {
  let component: AddActivityComponent;
  let fixture: ComponentFixture<AddActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityComponent, ActivityFormComponent, OptionFormComponent, OptionListComponent ],
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule, NotifierModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
