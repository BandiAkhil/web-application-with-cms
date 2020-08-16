import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/models/page';
import { PageService } from 'src/app/core/services/page.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { PageGroupModalComponent } from 'src/app/modules/admin/page-management/components/page-group-modal/page-group-modal.component';

@Component({
  selector: 'app-page-management',
  templateUrl: './page-management.component.html',
  styleUrls: ['./page-management.component.scss']
})
export class PageManagementComponent implements OnInit {

  pages: Page[] = [];

  constructor(
    private pageService: PageService,
    private router: Router,
    private modalService: NgbModal,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.pageService.getPages()
      .subscribe(pages => this.pages = pages);
  }

  onEdit(row) {
    this.router.navigate([`/admin/pages/${row.slug}/edit`]);
  }

  onDelete(row) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'page';

    modalRef.componentInstance.delete.subscribe(() => {
      this.pageService.deletePage(row.slug).subscribe(() => {
        this.notifierService.notify('success', 'Page successfully deleted.');
        this.getPages();
      });
    });
  }

  openManagePageGroupsModal() {
    this.modalService.open(PageGroupModalComponent, { backdrop: 'static', keyboard: false });
  }

  private openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }
}
