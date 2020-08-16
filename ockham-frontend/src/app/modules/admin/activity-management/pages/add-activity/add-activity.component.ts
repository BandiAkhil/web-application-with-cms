import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivityOption } from 'src/app/core/models/activity';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditOptionModalComponent } from 'src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component';
import { ActivityFormComponent } from 'src/app/modules/admin/activity-management/components/activity-form/activity-form.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { ActivityService } from 'src/app/core/services/activity.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  @ViewChild('activityForm', { static: false }) activityForm: ActivityFormComponent;

  submitted = false;
  activityOptions: ActivityOption[] = [];

  constructor(
    private modalService: NgbModal,
    private activityService: ActivityService,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() { }

  addOption(option: ActivityOption) {
    const opt = { ...option };
    this.activityOptions.push(opt);
  }

  deleteOption(option: ActivityOption) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'option';

    modalRef.componentInstance.delete.subscribe(() => {
      this.activityOptions = this.activityOptions.filter(o => o !== option);
    });
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

  onEditOption(activityOption: ActivityOption) {
    const modalRef = this.modalService.open(EditOptionModalComponent);
    modalRef.componentInstance.activityOption = activityOption;

    const index = this.activityOptions.indexOf(activityOption);
    modalRef.componentInstance.editOptionEmitter.subscribe(
      (option: ActivityOption) => {
        this.editOption(option, index);
      }
    );
  }

  editOption(option: ActivityOption, index: number) {
    this.activityOptions[index] = option;
  }

  formatOptions(activityOptions: ActivityOption[]) {
    activityOptions.forEach(o => {
      o['type_id'] = o.type.id;
      delete o.type;
    });
    return activityOptions;
  }

  createActivity(activityObj: FormData) {
    const activity: FormData = activityObj;
    activity.append('options', JSON.stringify(this.formatOptions(this.activityOptions)));
    this.activityService.createActivity(activity).subscribe(
      () => {
        this.notifierService.notify('success', 'Activity created successfully');
        this.router.navigate(['/admin/activities']);
      },
      () => {
        this.notifierService.notify('error', 'Could not create activity, try again later.');
      });
  }

  /*
    Calls the ActivityFormComponent's onSave method.
  */
  onSave() {
    this.activityForm.onSave();
  }

}
