import { Component, OnInit } from '@angular/core';
import { ActivityOption, Activity } from 'src/app/core/models/activity';
import { ActivityService } from 'src/app/core/services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { EditOptionModalComponent } from 'src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-activity-overview',
  templateUrl: './activity-overview.component.html',
  styleUrls: ['./activity-overview.component.scss']
})
export class ActivityOverviewComponent implements OnInit {
  activityOptions: ActivityOption[] = [];
  activity: Activity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activityService.getActivity(params.id).subscribe(
        activity => {
          this.activity = activity;
          this.activityOptions = this.activity.options;
        }
      );
    });
  }

  onDelete(type: string, option?: ActivityOption) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = type;

    modalRef.componentInstance.delete.subscribe(() => {
      type === 'activity' ? this.deleteActivity() : this.deleteOption(option);
    });
  }

  private deleteActivity() {
    this.activityService.deleteActivity(this.activity.id).subscribe(
      () => {
        this.router.navigate(['/activities']);
        this.notifierService.notify('success', 'Activity deleted successfully');
      },
      () => {
        this.notifierService.notify('error', 'Could not delete activity, try again later.');
      }
    );
  }

  editActivity(activity: FormData) {
    this.activityService.editActivity(activity, this.activity.id).subscribe(
      result => {
        this.activity = result;
        this.notifierService.notify('success', 'Activity updated successfully');
        this.router.navigate(['/admin/activities']);
      },
      () => {
        this.notifierService.notify('error', 'Could not edit activity, try again later.');
      }
    );
  }

  /*
    Opens delete modal
    returns: modalReference
  */
  private openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

  /*
    Opens edit modal
    returns: modalReference
  */
  private openEditModal() {
    return this.modalService.open(EditOptionModalComponent);
  }

  addOption(option: ActivityOption) {
    const opt = { ...option };
    opt['type_id'] = opt.type.id;
    delete opt.type;
    this.activityService.addOption(this.activity.id, opt).subscribe(
      result => {
        this.activityOptions.push(result);
      },
      () => {
        this.notifierService.notify('error', 'Could not add option, try again later.');
      }
    );
  }

  private deleteOption(option: ActivityOption) {
    this.activityService.deleteOption(this.activity.id, option).subscribe(
      () => {
        this.activityOptions = this.activityOptions.filter(o => o.id !== option.id);
      },
      () => {
        this.notifierService.notify('error', 'Could not delete option, try again later.');
      }
    );
  }


}
