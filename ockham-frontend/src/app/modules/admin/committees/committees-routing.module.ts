import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitteesComponent } from 'src/app/modules/admin/committees/committees.component';
import { AddCommitteeComponent } from 'src/app/modules/admin/committees/pages/add-committee/add-committee.component';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { EditCommitteeComponent } from 'src/app/modules/admin/committees/pages/edit-committee/edit-committee.component';

const routes: Routes = [
  {
    path: '',
    component: CommitteesComponent
  },
  {
    path: 'add',
    component: AddCommitteeComponent,
    canActivate: [RoleGuard],
    data: {role: 'board'}
  },
  {
    path: 'columns',
    loadChildren: () => import('../columns/columns.module').then(m => m.ColumnsModule),
    data: {
      model: 'committees'
    }
  },
  {
    path: ':id/edit',
    component: EditCommitteeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitteesRoutingModule { }
