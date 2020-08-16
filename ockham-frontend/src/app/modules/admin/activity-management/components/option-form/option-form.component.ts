import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivityOption } from 'src/app/core/models/activity';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ColumnTypeService } from 'src/app/core/services/column-type.service';
import { ColumnType } from 'src/app/core/models/column-type';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-option-form',
  templateUrl: './option-form.component.html',
  styleUrls: ['./option-form.component.scss']
})
export class OptionFormComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Input() action: string;
  @Input() option: ActivityOption;

  option_types: ColumnType[] = [];
  optionsForm: FormGroup;
  selectedType;
  compareType = this._compareType.bind(this);
  submitted = false;

  constructor(private formBuilder: FormBuilder, private ct: ColumnTypeService) {
    this.optionsForm = this.formBuilder.group({
      question: ['', Validators.required],
      type: ['', Validators.required],
      required: [false]
    });
  }

  ngOnInit() {
    this.ct.columnTypes.subscribe(types => this.option_types = types);

    if (this.option) {
      this.selectedType = this.option.type;
      this.optionsForm.patchValue({
        question: this.option.question,
        required: this.option.required,
        type: this.option.type
      });
    }

  }

  _compareType(a, b) {
    // Handle compare logic (eg check if unique ids are the same)
    return a.id === b.id;
 }

  get f() {
    return this.optionsForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.optionsForm.invalid) {
      return;
    }
    const optionObj: any = cloneDeep(this.optionsForm.value);
    this.submit.emit(optionObj);
    this.optionsForm.reset({
      question: '',
      type: '',
      required: false
    });
    this.submitted = false;
  }
}
