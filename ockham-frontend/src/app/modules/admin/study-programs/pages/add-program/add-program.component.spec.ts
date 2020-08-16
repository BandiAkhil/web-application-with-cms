import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProgramComponent } from 'src/app/modules/admin/study-programs/pages/add-program/add-program.component';
import { ProgramFormComponent } from 'src/app/modules/admin/study-programs/components/program-form/program-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';

describe('AddProgramComponent', () => {
  let component: AddProgramComponent;
  let fixture: ComponentFixture<AddProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgramComponent , ProgramFormComponent],
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule, NotifierModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
