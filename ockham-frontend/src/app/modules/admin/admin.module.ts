import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from 'src/app/modules/admin/admin-routing.module';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminLayoutComponent } from 'src/app/layout/admin-layout/admin-layout.component';


@NgModule({
  declarations: [AdminComponent, AdminLayoutComponent],
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
})
export class AdminModule { }
