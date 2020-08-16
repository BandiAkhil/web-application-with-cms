import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/core/services/page.service';
import { NotifierService } from 'angular-notifier';
import { PageGroupService } from 'src/app/core/services/page-group.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  constructor(
    private pageService: PageService,
    private pageGroupService: PageGroupService,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
  }

  onSave(page: FormData) {
    this.pageService.createPage(page).subscribe(() => {
      this.pageGroupService.fetchAndSetPageGroups();
      this.router.navigate(['/admin/pages']).then(() => {
        this.notifierService.notify('success', 'Page successfully created.');
      });
    }, error => {
      if (error.status === 400) {
        this.notifierService.notify('error', 'A page with the slug already exists.');
      } else {
        this.notifierService.notify('error', 'An unknown error occurred, try again later.');
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/pages']);
  }
}
