import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/core/models/column';
import { ColumnService } from 'src/app/core/services/column.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-column',
  templateUrl: './edit-column.component.html',
  styleUrls: ['./edit-column.component.scss']
})
export class EditColumnComponent implements OnInit {

  model: string;
  column: Column;

  constructor(
    private columnService: ColumnService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.route.data.subscribe(({ model }) => {
      this.model = model;

      this.route.paramMap.subscribe(params => {
        this.columnService.getColumn(model, params.get('id')).subscribe(column => {
          this.column = column;
        });
      });
    });
  }

  onSave(column: Column) {
    this.columnService.updateColumn(this.model, column, this.column.id).subscribe(() => {
      this.goBack().then(() => {
        this.notifierService.notify('success', 'Column successfully updated.');
      });
    });
  }

  onCancel() {
    this.goBack();
  }

  goBack() {
    return this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
