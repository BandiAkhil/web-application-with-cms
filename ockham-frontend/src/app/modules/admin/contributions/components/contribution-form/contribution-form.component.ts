import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contribution } from 'src/app/core/models/contribution';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.scss']
})
export class ContributionFormComponent implements OnInit {
  @Input() contribution: Contribution;
  @Output() save: EventEmitter<Contribution> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  contributionForm = new FormGroup({
    identifier: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required)
  });
  submitted = false;

  constructor() { }

  ngOnInit() {
    if (this.contribution) {
      this.contributionForm.patchValue(this.contribution);
      this.contributionForm.patchValue({ cost: this.contribution.cost_cents / 100 });
    }
  }

  get f() { return this.contributionForm.controls; }

  onSave() {
    this.submitted = true;

    if (this.contributionForm.invalid) {
      return;
    }

    const contribution = {
      identifier: this.contributionForm.value.identifier,
      cost_cents: Math.round(this.contributionForm.value.cost * 100)
    } as Contribution;

    this.save.emit(contribution);
  }

  onCancel() {
    this.cancel.emit();
  }
}
