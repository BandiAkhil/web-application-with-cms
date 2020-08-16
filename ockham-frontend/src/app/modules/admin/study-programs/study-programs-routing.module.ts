import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyProgramsComponent } from 'src/app/modules/admin/study-programs/study-programs.component';
import { AddProgramComponent } from 'src/app/modules/admin/study-programs/pages/add-program/add-program.component';
import { EditProgramComponent } from 'src/app/modules/admin/study-programs/pages/edit-program/edit-program.component';

const routes: Routes = [
  {
    path: '',
    component: StudyProgramsComponent
  },
  {
    path: 'add',
    component: AddProgramComponent
  },
  {
    path: ':id/edit',
    component: EditProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyProgramsRoutingModule { }
