import { NgModule } from '@angular/core';
import { PageManagementRoutingModule } from 'src/app/modules/admin/page-management/page-management-routing.module';
import { PageManagementComponent } from 'src/app/modules/admin/page-management/page-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPageComponent } from 'src/app/modules/admin/page-management/pages/add-page/add-page.component';
import { PageFormComponent } from 'src/app/modules/admin/page-management/components/page-form/page-form.component';
import { EditPageComponent } from 'src/app/modules/admin/page-management/pages/edit-page/edit-page.component';
import { PageGroupModalComponent } from 'src/app/modules/admin/page-management/components/page-group-modal/page-group-modal.component';


@NgModule({
  declarations: [PageManagementComponent, AddPageComponent, PageFormComponent, EditPageComponent, PageGroupModalComponent],
  imports: [
    SharedModule,
    PageManagementRoutingModule
  ],
  entryComponents: [
    PageGroupModalComponent
  ]
})
export class PageManagementModule { }
