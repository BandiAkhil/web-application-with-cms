import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Column } from 'src/app/core/models/column';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { ColumnTypeService } from 'src/app/core/services/column-type.service';
import { ColumnType } from 'src/app/core/models/column-type';

@Component({
  selector: 'app-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss']
})
export class ColumnFormComponent implements OnInit {
  @Input() column: Column;
  @Output() save: EventEmitter<Column> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  columnTypes: ColumnType[] = [];
  columnForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type_id: new FormControl('', Validators.required)
  });
  submitted = false;

  constructor(private columnTypeService: ColumnTypeService) { }

  ngOnInit() {
    if (this.column) {
      this.columnForm.patchValue({
        name: this.column.name,
        type_id: this.column.type.id
      });
    }
    this.columnTypeService.columnTypes.subscribe(columnTypes => this.columnTypes = columnTypes);
  }

  get f() { return this.columnForm.controls; }

  onSave() {
    this.submitted = true;

    if (this.columnForm.invalid) {
      return;
    }

    const column = cloneDeep(this.columnForm.value) as Column;
    this.save.emit(column);
  }

  onCancel() {
    this.cancel.emit();
  }
}
