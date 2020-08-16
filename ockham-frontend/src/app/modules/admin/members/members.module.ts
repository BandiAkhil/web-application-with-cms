import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MembersRoutingModule } from 'src/app/modules/admin/members/members-routing.module';
import { MembersComponent } from 'src/app/modules/admin/members/members.component';
import { MemberFormComponent } from 'src/app/modules/admin/members/member-form/member-form.component';
import { AddMemberModalComponent } from 'src/app/modules/admin/members/add-member-modal/add-member-modal.component';
import { ArchiveMemberModalComponent } from 'src/app/modules/admin/members/archive-member-modal/archive-member-modal.component';
import { ContributionModalComponent } from 'src/app/modules/admin/members/contribution-modal/contribution-modal.component';
import { ContributionFormComponent } from 'src/app/modules/admin/members/contribution-modal/contribution-form/contribution-form.component';
import { PaidContributionsComponent } from 'src/app/modules/admin/members/contribution-modal/paid-contributions/paid-contributions.component';

@NgModule({
  declarations: [MembersComponent, MemberFormComponent, AddMemberModalComponent, ArchiveMemberModalComponent, ContributionModalComponent, ContributionFormComponent, PaidContributionsComponent],
  imports: [
    MembersRoutingModule,
    SharedModule
  ],
  entryComponents: [
    AddMemberModalComponent,
    ArchiveMemberModalComponent,
    ContributionModalComponent
  ]
})
export class MembersModule { }
