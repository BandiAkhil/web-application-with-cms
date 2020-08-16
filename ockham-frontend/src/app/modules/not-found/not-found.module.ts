import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from 'src/app/modules/not-found/not-found-routing.module';
import { NotFoundComponent } from 'src/app/modules/not-found/not-found.component';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    FlexModule
  ]
})
export class NotFoundModule { }
