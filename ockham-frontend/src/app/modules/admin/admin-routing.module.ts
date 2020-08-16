import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { AdminLayoutComponent } from 'src/app/layout/admin-layout/admin-layout.component';

/* All these routes can only be accessed by committee members by default */
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'members',
        canActivate: [RoleGuard],
        data: { role: 'board' },
        loadChildren: () => import('./members/members.module').then(m => m.MembersModule)
      },
      {
        path: 'committees',
        loadChildren: () => import('./committees/committees.module').then(m => m.CommitteesModule)
      },
      {
        path: 'news',
        canActivate: [RoleGuard],
        data: { role: 'board' },
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
      },
      {
        path: 'activities',
        loadChildren: () => import('./activity-management/activity-management.module').then(m => m.ActivityManagementModule)
      },
      {
        path: 'contributions',
        canActivate: [RoleGuard],
        data: { role: 'board' },
        loadChildren: () => import('./contributions/contributions.module').then(m => m.ContributionsModule)
      },
      {
        path: 'study-programs',
        canActivate: [RoleGuard],
        data: { role: 'board' },
        loadChildren: () => import('./study-programs/study-programs.module').then(m => m.StudyProgramsModule)
      },
      {
        path: 'pages',
        canActivate: [RoleGuard],
        data: { role: 'board' },
        loadChildren: () => import('./page-management/page-management.module').then(m => m.PageManagementModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
