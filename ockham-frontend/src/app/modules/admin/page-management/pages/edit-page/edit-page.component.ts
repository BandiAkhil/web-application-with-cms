import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/models/page';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/core/services/page.service';
import { NotifierService } from 'angular-notifier';
import { PageGroupService } from 'src/app/core/services/page-group.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  page: Page;

  constructor(
    private pageService: PageService,
    private pageGroupService: PageGroupService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pageService.getPage(params.get('slug')).subscribe(page => {
        this.page = page;
      });
    });
  }

  onSave(page: FormData) {
    this.pageService.updatePage(page, this.page.slug).subscribe(() => {
      this.pageGroupService.fetchAndSetPageGroups();
      this.router.navigate(['/admin/pages']).then(() => {
        this.notifierService.notify('success', 'Page successfully updated.');
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
