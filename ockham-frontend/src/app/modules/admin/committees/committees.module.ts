import { NgModule } from '@angular/core';
import { CommitteesRoutingModule } from 'src/app/modules/admin/committees/committees-routing.module';
import { CommitteesComponent } from 'src/app/modules/admin/committees/committees.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCommitteeComponent } from 'src/app/modules/admin/committees/pages/add-committee/add-committee.component';
import { EditCommitteeComponent } from 'src/app/modules/admin/committees/pages/edit-committee/edit-committee.component';
import { CommitteeFormComponent } from 'src/app/modules/admin/committees/components/committee-form/committee-form.component';
import { CommitteeMemberModalComponent } from 'src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component';

@NgModule({
  declarations: [CommitteesComponent, AddCommitteeComponent, EditCommitteeComponent, CommitteeFormComponent, CommitteeMemberModalComponent],
  imports: [
    CommitteesRoutingModule,
    SharedModule,
  ],
  entryComponents: [CommitteeMemberModalComponent]
})
export class CommitteesModule { }
