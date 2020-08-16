import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from 'src/app/modules/admin/members/members.component';
import { MemberFormComponent } from 'src/app/modules/admin/members/member-form/member-form.component';

const routes: Routes = [
  {
    path: '',
    component: MembersComponent
  },
  {
    path: 'add',
    component: MemberFormComponent,
    data: {
      mode: 'add'
    }
  },
  {
    path: ':id/edit',
    component: MemberFormComponent,
    data: {
      mode: 'edit'
    }
  },
  {
    path: 'columns',
    loadChildren: () => import('../columns/columns.module').then(m => m.ColumnsModule),
    data: {
      model: 'members'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
