import { NgModule } from '@angular/core';
import { StudyProgramsRoutingModule } from 'src/app/modules/admin/study-programs/study-programs-routing.module';
import { StudyProgramsComponent } from 'src/app/modules/admin/study-programs/study-programs.component';
import { AddProgramComponent } from 'src/app/modules/admin/study-programs/pages/add-program/add-program.component';
import { EditProgramComponent } from 'src/app/modules/admin/study-programs/pages/edit-program/edit-program.component';
import { ProgramFormComponent } from 'src/app/modules/admin/study-programs/components/program-form/program-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudyProgramsComponent, AddProgramComponent, EditProgramComponent, ProgramFormComponent],
  imports: [
    StudyProgramsRoutingModule,
    SharedModule
  ]
})
export class StudyProgramsModule { }
