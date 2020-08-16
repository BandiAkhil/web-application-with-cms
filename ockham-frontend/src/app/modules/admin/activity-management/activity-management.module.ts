import { NgModule } from '@angular/core';
import { ActivityManagementRoutingModule } from 'src/app/modules/admin/activity-management/activity-management-routing.module';
import { ActivityManagementComponent } from 'src/app/modules/admin/activity-management/activity-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddActivityComponent } from 'src/app/modules/admin/activity-management/pages/add-activity/add-activity.component';
import { EditOptionModalComponent } from 'src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component';
import { OptionListComponent } from 'src/app/modules/admin/activity-management/components/option-list/option-list.component';
import { ActivityOverviewComponent } from 'src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component';
import { ActivityFormComponent } from 'src/app/modules/admin/activity-management/components/activity-form/activity-form.component';
import { OptionFormComponent } from 'src/app/modules/admin/activity-management/components/option-form/option-form.component';
import { ActivityWrapperComponent } from 'src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component';
import { ActivityRegistrationsComponent } from 'src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component';

@NgModule({
  declarations: [
    ActivityManagementComponent,
    AddActivityComponent,
    OptionListComponent,
    ActivityOverviewComponent,
    ActivityFormComponent,
    OptionFormComponent,
    EditOptionModalComponent,
    ActivityWrapperComponent,
    ActivityRegistrationsComponent,
  ],
  imports: [
    ActivityManagementRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    EditOptionModalComponent
  ]
})
export class ActivityManagementModule { }
