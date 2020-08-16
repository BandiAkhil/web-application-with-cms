import { Component, OnInit } from '@angular/core';
import { Committee } from 'src/app/core/models/committee';
import { CommitteeService } from 'src/app/core/services/committee.service';
import { MemberService } from 'src/app/core/services/member.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.scss']
})
export class CommitteesComponent implements OnInit {

  committees: Committee[] = [];

  constructor(
    private committeeService: CommitteeService,
    private memberService: MemberService,
    private authService: AuthenticationService,
    private modalService: NgbModal,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
    const member = this.authService._getUser();
    if (!member) {
      return;
    }
    this.getCommittees(member.id);
  }

  getCommittees(id) {
    this.memberService.fetchMemberCommittees(id)
      .subscribe(committees => {
        this.committees = committees;
      }, () => {
        this.notifierService.notify('error', `Could not fetch committees, try again later`);
      });
  }

  editCommittee(committee: Committee) {
    this.router.navigate([`/admin/committees/${committee.id}/edit`]);
  }

  deleteCommittee(committee: Committee) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.action = 'delete-committee';
    modalRef.componentInstance.objRef = 'this Committee';
    modalRef.componentInstance.delete.subscribe(() => {
      this.committeeService.deleteCommittee(committee.id).subscribe(
        () => {
          this.committees = this.committees.filter(c => c.id !== committee.id);
          this.notifierService.notify('success', `Committee deleted successfully`);
        },
        () => {
          this.notifierService.notify('error', `Could not delete committee, try again later`);
        }
      );
    });
  }

}
