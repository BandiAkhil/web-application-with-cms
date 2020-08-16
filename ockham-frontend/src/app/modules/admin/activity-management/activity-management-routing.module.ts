import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityManagementComponent } from 'src/app/modules/admin/activity-management/activity-management.component';
import { AddActivityComponent } from 'src/app/modules/admin/activity-management/pages/add-activity/add-activity.component';
import { ActivityOverviewComponent } from 'src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component';
import { ActivityWrapperComponent } from 'src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component';
import { ActivityRegistrationsComponent } from 'src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component';

const routes: Routes = [
  {
    path: '', component: ActivityManagementComponent
  },
  {
    path: 'add', component: AddActivityComponent
  },
  {
    path: 'columns',
    loadChildren: () => import('../columns/columns.module').then(m => m.ColumnsModule),
    data: {
      model: 'activities'
    }
  },
  {
    path: ':id/edit',
    component: ActivityWrapperComponent,
    children: [
      {
        path: '',
        component: ActivityOverviewComponent
      },
      {
        path: 'registrations',
        component: ActivityRegistrationsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityManagementRoutingModule { }
