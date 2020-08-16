import { Component, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { ActivityOption } from 'src/app/core/models/activity';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OptionFormComponent } from 'src/app/modules/admin/activity-management/components/option-form/option-form.component';

@Component({
  selector: 'app-edit-option-modal',
  templateUrl: './edit-option-modal.component.html',
  styleUrls: ['./edit-option-modal.component.scss']
})
export class EditOptionModalComponent {
  @ViewChild('optionForm', {static: false}) optionForm: OptionFormComponent;
  @Output() editOptionEmitter: EventEmitter<any> = new EventEmitter();
  @Input() activityOption: ActivityOption;

  constructor(private activeModal: NgbActiveModal) { }
  /*
    The method called when the save emitter
    of the child OptionFormComponent has emitted
    the option object to be saved.
  */
  editOption(optionObject: ActivityOption) {
    this.editOptionEmitter.emit(optionObject);
  }

  /*
    This function calls the AddOptionFormCompontent's submit
    button.
  */
  save() {
    this.optionForm.onSubmit();
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }

}
