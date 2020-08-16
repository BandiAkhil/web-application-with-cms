import { NgModule } from '@angular/core';
import { NewsRoutingModule } from 'src/app/modules/admin/news/news-routing.module';
import { NewsComponent } from 'src/app/modules/admin/news/news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddNewsComponent } from 'src/app/modules/admin/news/pages/add-news/add-news.component';
import { NewsFormComponent } from 'src/app/modules/admin/news/components/news-form/news-form.component';
import { EditNewsComponent } from 'src/app/modules/admin/news/pages/edit-news/edit-news.component';


@NgModule({
  declarations: [NewsComponent, AddNewsComponent, NewsFormComponent, EditNewsComponent],
  imports: [
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
