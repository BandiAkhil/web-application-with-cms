import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLayoutComponent } from 'src/app/layout/page-layout/page-layout.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { PageResolver } from 'src/app/core/services/resolvers/page.resolver';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],
    data: {role: 'committee_member'},
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'activities',
        canActivate: [],
        loadChildren: () => import('./modules/activities/activities.module').then(m => m.ActivitiesModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'committees',
        loadChildren: () => import('./modules/committees/committees.module').then(m => m.CommitteesModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'account',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
      },
      {
        path: 'pages/:slug',
        loadChildren: () => import('./modules/page/page.module').then(m => m.PageModule) ,
        resolve: {
          page: PageResolver
        }
      },
      {
        path: '**',
        loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
