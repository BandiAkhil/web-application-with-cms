import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contribution } from 'src/app/core/models/contribution';
import { cloneDeep } from 'lodash';
import { MemberContribution } from 'src/app/core/models/member';

@Component({
  selector: 'app-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.scss']
})
export class ContributionFormComponent implements OnInit {
  @Input() contributions: Contribution[];
  @Input()
  set mCont(c: MemberContribution) {
    this._mCont = c;
    if (c) {
      this.cForm.patchValue({
        contribution_id: this._mCont.contribution.id,
        payment_method: this._mCont.payment_method
      });
    }
  }
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  submitted = false;
  _mCont: MemberContribution;
  cForm = new FormGroup({
    contribution_id: new FormControl('', Validators.required),
    payment_method: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {}

  get f() {
    return this.cForm.controls;
  }

  resetForm() {
    this.submitted = false;
    this.cForm.reset({contribution_id: '', payment_method: ''});
  }

  onCancel() {
    this.cancel.emit();
    this.resetForm();
  }

  onSubmit() {
    this.submitted = true;
    if (this.cForm.invalid) {
      return;
    }
    const contData = cloneDeep(this.cForm.value);
    this._mCont ? this.edit.emit(contData) : this.add.emit(contData);
    this.resetForm();
  }

}
