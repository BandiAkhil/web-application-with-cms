import { NgModule } from '@angular/core';
import { PageRoutingModule } from 'src/app/modules/page/page-routing.module';
import { PageComponent } from 'src/app/modules/page/page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PageComponent],
  imports: [
    SharedModule,
    PageRoutingModule
  ]
})
export class PageModule { }
