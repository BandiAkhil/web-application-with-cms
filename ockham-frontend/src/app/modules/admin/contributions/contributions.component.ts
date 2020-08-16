import { Component, OnInit } from '@angular/core';
import { ContributionService } from 'src/app/core/services/contribution.service';
import { Contribution } from 'src/app/core/models/contribution';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { ContributionExportComponent } from './components/contribution-export/contribution-export.component';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  contributions: Contribution[];
  columnDefs = [
    {
      key: 'cost_cents',
      format: c => '€ ' + (c / 100).toFixed(2)
    }
  ];

  constructor(
    private contributionService: ContributionService,
    private router: Router,
    private modalService: NgbModal,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.getContributions();
  }

  getContributions() {
    this.contributionService.getContributions()
      .subscribe(contributions => this.contributions = contributions, () => {
        this.notifierService.notify('error', 'Could not fetch contributions, try again later');
      });
  }

  onEdit(row) {
    this.router.navigate([`/admin/contributions/${row.id}/edit`]);
  }

  onDelete(row) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'contribution';

    modalRef.componentInstance.delete.subscribe(() => {
      this.contributionService.deleteContribution(row.id).subscribe(() => {
        this.notifierService.notify('success', 'Contribution successfully deleted.');
        this.getContributions();
      });
    });
  }

  onExport() {
    const modalRef = this.modalService.open(ContributionExportComponent);
    modalRef.componentInstance.contributions = this.contributions;
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }
}
