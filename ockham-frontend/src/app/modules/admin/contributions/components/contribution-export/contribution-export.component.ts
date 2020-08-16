import { Component, OnInit, Input } from '@angular/core';
import { ContributionService } from 'src/app/core/services/contribution.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contribution } from 'src/app/core/models/contribution';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contribution-export',
  templateUrl: './contribution-export.component.html',
  styleUrls: ['./contribution-export.component.scss']
})
export class ContributionExportComponent implements OnInit {
  @Input() contributions: Contribution[];

  exportForm = new FormGroup({
    category: new FormControl('', Validators.required),
    contribution_id: new FormControl('', Validators.required),
    track: new FormControl('bachelor', Validators.required),
    track_number: new FormControl('', Validators.required)
  });
  submitted = false;

  constructor(private contributionService: ContributionService, private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  get f() { return this.exportForm.controls; }

  export() {
    this.submitted = true;

    if (this.exportForm.invalid) {
      return;
    }

    const { category, contribution_id, track, track_number } = this.exportForm.value;

    const data: any = track === 'bachelor' ? { batch_bhp: track_number } : { batch_mhp: track_number };
    data.category = category;

    this.contributionService.getContributionExport(contribution_id, data)
      .subscribe(response => {
        const blob = new Blob([response.body], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = this.getFileName(response);
        link.click();
      });
  }

  close() {
    this.activeModal.close();
  }

  private getFileName(httpResponse) {
    const contentDispositionHeader = httpResponse.headers.get('Content-Disposition');
    const result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
    return result.replace(/"/g, '');
  }
}
