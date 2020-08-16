import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Column } from 'src/app/core/models/column';
import { ColumnService } from 'src/app/core/services/column.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {

  model: string;
  columns: Column[] = [];

  constructor(
    private columnService: ColumnService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.route.data.subscribe(({ model }) => {
      this.model = model;
      this.getColumns();
    });
  }

  getColumns() {
    this.columnService.getColumns(this.model, false)
      .subscribe(columns => this.columns = columns);
  }

  onEdit(row) {
    this.router.navigate([`${row.id}/edit`], { relativeTo: this.route });
  }

  onDelete(row) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = `${this.model} column`;

    modalRef.componentInstance.delete.subscribe(() => {
      this.columnService.deleteColumn(this.model, row.id).subscribe(() => {
        this.notifierService.notify('success', 'Column successfully deleted.');
        this.getColumns();
      });
    });
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }
}
