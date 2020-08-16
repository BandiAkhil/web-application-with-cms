import { Component, OnInit, Input } from '@angular/core';
import { Member, MemberContribution } from 'src/app/core/models/member';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContributionService } from 'src/app/core/services/contribution.service';
import { Contribution } from 'src/app/core/models/contribution';
import { MemberService } from 'src/app/core/services/member.service';
import { NotifierService } from 'angular-notifier';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-contribution-modal',
  templateUrl: './contribution-modal.component.html',
  styleUrls: ['./contribution-modal.component.scss']
})
export class ContributionModalComponent implements OnInit {
  @Input() member: Member;

  contributions: Contribution[];
  paidContributions: any[];
  contToEdit: MemberContribution;

  constructor(
    private activeModal: NgbActiveModal,
    private cs: ContributionService,
    private ms: MemberService,
    private ns: NotifierService,
    private modals: NgbModal) { }

  ngOnInit() {
    this.getAllContributions();
    this.getPaidConts();
  }

  getAllContributions() {
    this.cs.getContributions().subscribe(
      contributions => {
        this.contributions = contributions;
      }
    );
  }

  getPaidConts() {
    return this.ms.getContributions(this.member).subscribe(
      conts => {
        this.paidContributions = conts;
      }
    );
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  close() {
    this.activeModal.close();
  }

  onEditCancel() {
    this.contToEdit = null;
  }

  onEditCont(cont: MemberContribution) {
    this.contToEdit = cont;
  }

  onDelCont(cont: MemberContribution) {
    const modalRef = this.modals.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'contribution';

    modalRef.componentInstance.delete.subscribe(
      () => {
        this.deleteContribution(cont);
      }
    );
  }

  private deleteContribution(cont: MemberContribution) {
    this.ms.deleteContribution(this.member.id, cont.contribution.id).subscribe(
      () => {
        this.getPaidConts();
        this.ns.notify('success', 'Contribution deleted successfully');
      },
      () => {
        this.ns.notify('error', 'Could not delete contribution, try again later.');
      }
    );
  }

  addContribution(contData: any) {
    this.ms.addContribution(this.member, contData).subscribe(
      res => {
        this.paidContributions.push(res);
        this.ns.notify('success', 'Contribution was added successfully');
      },
      () => {
        this.ns.notify('error', 'Could not add contribution, try again later.');
      });
  }

  editContribution(contData: any) {
    this.ms.editContribution(this.member.id, contData).subscribe(
      () => {
        this.getPaidConts();
        this.ns.notify('success', 'Changes were applied successfully');
        this.onEditCancel();
      },
      () => {
        this.ns.notify('error', 'Could not update contribution, try again later.');
      }
    );
  }

}
