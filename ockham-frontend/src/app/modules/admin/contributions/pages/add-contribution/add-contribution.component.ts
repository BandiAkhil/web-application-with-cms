import { Component, OnInit } from '@angular/core';
import { ContributionService } from 'src/app/core/services/contribution.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Contribution } from 'src/app/core/models/contribution';

@Component({
  selector: 'app-add-contribution',
  templateUrl: './add-contribution.component.html',
  styleUrls: ['./add-contribution.component.scss']
})
export class AddContributionComponent implements OnInit {

  constructor(
    private contributionService: ContributionService,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
  }

  onSave(contribution: Contribution) {
    this.contributionService.createContribution(contribution).subscribe(() => {
      this.router.navigate(['/admin/contributions']).then(() => {
        this.notifierService.notify('success', 'Contribution successfully created.');
      });
    }, error => {
      if (error.status === 400) {
        this.notifierService.notify('error', 'The identifier is already registered.');
      } else {
        this.notifierService.notify('error', 'Could not create contribution, try again later.');
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/contributions']);
  }
}
