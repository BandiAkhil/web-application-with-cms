import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/core/models/column';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnService } from 'src/app/core/services/column.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})
export class AddColumnComponent implements OnInit {

  model: string;

  constructor(
    private columnService: ColumnService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.route.data.subscribe(({ model }) => {
      this.model = model;
    });
  }

  onSave(column: Column) {
    this.columnService.createColumn(this.model, column).subscribe(() => {
      this.goBack().then(() => {
        this.notifierService.notify('success', 'Column successfully created.');
      });
    });
  }

  onCancel() {
    this.goBack();
  }

  goBack() {
    return this.router.navigate(['../'], { relativeTo: this.route });
  }
}
