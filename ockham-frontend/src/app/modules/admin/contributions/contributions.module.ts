import { NgModule } from '@angular/core';
import { ContributionsRoutingModule } from 'src/app/modules/admin/contributions/contributions-routing.module';
import { ContributionsComponent } from 'src/app/modules/admin/contributions/contributions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContributionFormComponent } from 'src/app/modules/admin/contributions/components/contribution-form/contribution-form.component';
import { AddContributionComponent } from 'src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component';
import { EditContributionComponent } from 'src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component';
import { ContributionExportComponent } from 'src/app/modules/admin/contributions/components/contribution-export/contribution-export.component';


@NgModule({
  declarations: [ContributionsComponent, ContributionFormComponent, AddContributionComponent, EditContributionComponent, ContributionExportComponent],
  imports: [
    SharedModule,
    ContributionsRoutingModule
  ],
  entryComponents: [
    ContributionExportComponent
  ]
})
export class ContributionsModule { }
