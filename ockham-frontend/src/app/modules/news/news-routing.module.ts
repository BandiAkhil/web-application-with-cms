import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from 'src/app/modules/news/news.component';
import { NewsItemComponent } from 'src/app/modules/news/news-item/news-item.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: ':id',
    component: NewsItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
