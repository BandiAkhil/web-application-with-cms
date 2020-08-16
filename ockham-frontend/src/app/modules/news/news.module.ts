import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsRoutingModule } from 'src/app/modules/news/news-routing.module';
import { NewsComponent } from 'src/app/modules/news/news.component';
import { NewsItemComponent } from 'src/app/modules/news/news-item/news-item.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NewsComponent, NewsItemComponent],
  imports: [
    SharedModule,
    NewsRoutingModule,
    NgbPaginationModule
  ]
})
export class NewsModule { }
