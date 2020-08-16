import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributionsComponent } from 'src/app/modules/admin/contributions/contributions.component';
import { AddContributionComponent } from 'src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component';
import { EditContributionComponent } from 'src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component';

const routes: Routes = [
  {
    path: '',
    component: ContributionsComponent
  },
  {
    path: 'add',
    component: AddContributionComponent
  },
  {
    path: ':id/edit',
    component: EditContributionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContributionsRoutingModule { }
