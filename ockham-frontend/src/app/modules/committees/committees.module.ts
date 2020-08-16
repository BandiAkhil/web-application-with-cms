import { NgModule } from '@angular/core';
import { CommitteesRoutingModule } from 'src/app/modules/committees/committees-routing.module';
import { CommitteesComponent } from 'src/app/modules/committees/committees.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CommitteesComponent],
  imports: [
    SharedModule,
    CommitteesRoutingModule,
    NgbPaginationModule
  ]
})
export class CommitteesModule { }
