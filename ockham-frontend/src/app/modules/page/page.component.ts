import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/models/page';
import { PageService } from 'src/app/core/services/page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page: Page;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.page = data.page;
    });
  }

  get content() {
    return this.sanitizer.bypassSecurityTrustHtml(this.page.content);
  }

  deletePage() {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'page';

    modalRef.componentInstance.delete.subscribe(() => {
      this.pageService.deletePage(this.page.slug).subscribe(() => {
        this.router.navigate(['/']).then(() => {
          this.notifierService.notify('success', 'Page successfully deleted.');
        });
      });
    });
  }

  private openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

}
