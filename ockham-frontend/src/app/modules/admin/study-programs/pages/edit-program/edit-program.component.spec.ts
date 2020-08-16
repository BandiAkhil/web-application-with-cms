import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProgramComponent } from 'src/app/modules/admin/study-programs/pages/edit-program/edit-program.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { ProgramFormComponent } from 'src/app/modules/admin/study-programs/components/program-form/program-form.component';

describe('EditProgramComponent', () => {
  let component: EditProgramComponent;
  let fixture: ComponentFixture<EditProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProgramComponent, ProgramFormComponent ],
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule, NotifierModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
