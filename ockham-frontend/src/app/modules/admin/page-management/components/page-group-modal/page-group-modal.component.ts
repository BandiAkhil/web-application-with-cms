import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PageGroupService } from 'src/app/core/services/page-group.service';
import { PageGroup } from 'src/app/core/models/page_group';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { NotifierService } from 'angular-notifier';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-page-group-modal',
  templateUrl: './page-group-modal.component.html',
  styleUrls: ['./page-group-modal.component.scss']
})
export class PageGroupModalComponent implements OnInit {

  editingPageGroup: PageGroup;
  pageGroups: PageGroup[] = [];
  pageGroupForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  submitted = false;

  constructor(
    private pageGroupService: PageGroupService,
    private notifierService: NotifierService,
    private activeModal: NgbActiveModal,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.pageGroupService.fetchPageGroups()
      .subscribe(pageGroups => this.pageGroups = pageGroups);
  }

  get f() { return this.pageGroupForm.controls; }

  onSave() {
    this.submitted = true;

    if (this.pageGroupForm.invalid) {
      return;
    }

    const pageGroup = this.pageGroupForm.value as PageGroup;
    this.pageGroupService.createPageGroup(pageGroup)
      .subscribe(result => {
        this.pageGroups.push(result);
        this.notifierService.notify('success', 'Page group successfully created.');
      }, error => {
        if (error.status === 400) {
          this.notifierService.notify('error', 'The name does already exist.');
        } else {
          this.notifierService.notify('error', 'An unknown error occurred, try again later.');
        }
      });
  }

  onEditStart(pageGroup: PageGroup) {
    this.editingPageGroup = cloneDeep(pageGroup);
  }

  onEditStop() {
    this.editingPageGroup = null;
  }

  onEdit() {
    if (!this.editingPageGroup || !this.editingPageGroup.name) {
      return;
    }

    this.pageGroupService.updatePageGroup({ name: this.editingPageGroup.name }, this.editingPageGroup.id)
      .subscribe(pageGroup => {
        this.editingPageGroup = null;
        const index = this.pageGroups.findIndex(group => group.id === pageGroup.id);
        this.pageGroups[index] = pageGroup;
        this.notifierService.notify('success', 'Page group successfully updated.');
      }, error => {
        if (error.status === 400) {
          this.notifierService.notify('error', 'The name does already exist.');
        } else {
          this.notifierService.notify('error', 'An unknown error occurred, try again later.');
        }
      });
  }

  onDelete(pageGroup: PageGroup) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'page group';

    modalRef.componentInstance.delete.subscribe(() => {
      this.pageGroupService.deletePageGroup(pageGroup.id).subscribe(() => {
        this.notifierService.notify('success', 'Page group successfully deleted.');
        this.pageGroups.splice(this.pageGroups.indexOf(pageGroup), 1);
      }, () => {
        this.notifierService.notify('error', 'An unknown error occurred, try again later.');
      });
    });
  }

  private openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

  close() {
    this.pageGroupService.fetchAndSetPageGroups();
    this.activeModal.close();
  }
}
