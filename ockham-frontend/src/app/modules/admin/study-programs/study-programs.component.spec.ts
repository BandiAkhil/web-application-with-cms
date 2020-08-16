import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyProgramsComponent } from 'src/app/modules/admin/study-programs/study-programs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudyProgramsComponent', () => {
  let component: StudyProgramsComponent;
  let fixture: ComponentFixture<StudyProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramsComponent ],
      imports: [ SharedModule, HttpClientTestingModule, NotifierModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
