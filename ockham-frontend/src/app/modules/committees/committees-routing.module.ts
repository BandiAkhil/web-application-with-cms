import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitteesComponent } from './committees.component';

const routes: Routes = [{ path: '', component: CommitteesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitteesRoutingModule { }
