import { NgModule } from '@angular/core';
import { ColumnsRoutingModule } from 'src/app/modules/admin/columns/columns-routing.module';
import { ColumnsComponent } from 'src/app/modules/admin/columns/columns.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColumnFormComponent } from 'src/app/modules/admin/columns/components/column-form/column-form.component';
import { AddColumnComponent } from 'src/app/modules/admin/columns/pages/add-column/add-column.component';
import { EditColumnComponent } from 'src/app/modules/admin/columns/pages/edit-column/edit-column.component';


@NgModule({
  declarations: [ColumnsComponent, ColumnFormComponent, AddColumnComponent, EditColumnComponent],
  imports: [
    SharedModule,
    ColumnsRoutingModule
  ]
})
export class ColumnsModule { }
