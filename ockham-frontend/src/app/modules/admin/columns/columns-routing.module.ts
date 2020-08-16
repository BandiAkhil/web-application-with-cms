import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnsComponent } from 'src/app/modules/admin/columns/columns.component';
import { AddColumnComponent } from 'src/app/modules/admin/columns/pages/add-column/add-column.component';
import { EditColumnComponent } from 'src/app/modules/admin/columns/pages/edit-column/edit-column.component';

const routes: Routes = [
  {
    path: '',
    component: ColumnsComponent
  },
  {
    path: 'add',
    component: AddColumnComponent
  },
  {
    path: ':id/edit',
    component: EditColumnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColumnsRoutingModule { }
