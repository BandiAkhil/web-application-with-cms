import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/core/services/activity.service';
import { Activity, ActivityOption } from 'src/app/core/models/activity';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Committee } from 'src/app/core/models/committee';
import { Router } from '@angular/router';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberService } from 'src/app/core/services/member.service';
import { HtmlToTextPipe } from 'src/app/shared/pipes/html-to-text.pipe';
import { CommitteeService } from 'src/app/core/services/committee.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-activity-management',
  templateUrl: './activity-management.component.html',
  styleUrls: ['./activity-management.component.scss']
})
export class ActivityManagementComponent implements OnInit {
  activities: Activity[];
  committees: Committee[];
  defaultCommittee: Committee;
  columnDefs = [
    {
      key: 'description',
      format: d => this.htmlToTextPipe.transform(d)
    }
  ];

  constructor(
    private activityService: ActivityService,
    private authService: AuthenticationService,
    private memberService: MemberService,
    private cs: CommitteeService,
    private router: Router,
    private modalService: NgbModal,
    private htmlToTextPipe: HtmlToTextPipe,
    private notifierService: NotifierService) { }

  ngOnInit() {
    const member = this.authService._getUser();
    if (!member) {
      return;
    }
    this.getCommittees(member.id);
  }

  getCommittees(id) {
    return this.memberService.getMemberCommittees(id).subscribe(
      committees => {
        this.committees = committees;
        this.defaultCommittee = this.committees[0];

        if (this.defaultCommittee) {
          this.getActivities(this.defaultCommittee.id);
        }
      }
    );
  }

  getActivities(committeeId: number) {
    this.activityService.getActivities(committeeId).subscribe(
      activities => {
        this.activities = activities;
      }
    );
  }

  onSelectChange(committee: Committee) {
    this.getActivities(committee.id);
  }

  onDeleteActivity(activity: ActivityOption) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'this Activity';
    modalRef.componentInstance.delete.subscribe(() => {
      this.deleteActivity(activity.id);
    });
  }

  editActivity(activity: ActivityOption) {
    this.router.navigate([`/admin/activities/${activity.id}/edit`]);
  }

  deleteActivity(id: number) {
    this.activityService.deleteActivity(id).subscribe(
      () => {
        this.notifierService.notify('success', 'Activity deleted successfully');
        this.activities = this.activities.filter(a => a.id !== id);
      },
      () => {
        this.notifierService.notify('error', 'Could not delete activity, try again later.');
      }
    );
  }

}
