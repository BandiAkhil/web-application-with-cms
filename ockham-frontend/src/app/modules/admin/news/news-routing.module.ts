import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from 'src/app/modules/admin/news/news.component';
import { AddNewsComponent } from 'src/app/modules/admin/news/pages/add-news/add-news.component';
import { EditNewsComponent } from 'src/app/modules/admin/news/pages/edit-news/edit-news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'add',
    component: AddNewsComponent
  },
  {
    path: ':id/edit',
    component: EditNewsComponent
  },
  {
    path: 'columns',
    loadChildren: () => import('../columns/columns.module').then(m => m.ColumnsModule),
    data: {
      model: 'news'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
