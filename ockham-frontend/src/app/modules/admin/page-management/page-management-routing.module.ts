import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageManagementComponent } from 'src/app/modules/admin/page-management/page-management.component';
import { AddPageComponent } from 'src/app/modules/admin/page-management/pages/add-page/add-page.component';
import { EditPageComponent } from 'src/app/modules/admin/page-management/pages/edit-page/edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: PageManagementComponent
  },
  {
    path: 'add',
    component: AddPageComponent
  },
  {
    path: ':slug/edit',
    component: EditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageManagementRoutingModule { }
