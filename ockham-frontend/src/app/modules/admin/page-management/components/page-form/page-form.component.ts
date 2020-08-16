import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Page } from 'src/app/core/models/page';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { PageGroupService } from 'src/app/core/services/page-group.service';
import { PageGroup } from 'src/app/core/models/page_group';
import { UploadedFile } from 'src/app/core/models/uploaded_file';
import { UploadedFileService } from 'src/app/core/services/uploaded-file.service';
import { NotifierService } from 'angular-notifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { PageGroupModalComponent } from 'src/app/modules/admin/page-management/components/page-group-modal/page-group-modal.component';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})
export class PageFormComponent implements OnInit, OnChanges {
  @Input() page: Page;
  @Output() save: EventEmitter<FormData> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  pageForm = new FormGroup({
    title: new FormControl('', Validators.required),
    slug: new FormControl('', [Validators.required, this.validateSlug]),
    content: new FormControl('', Validators.required),
    page_group_id: new FormControl(null, Validators.required),
    uploadedFiles: new FormControl([])
  });
  pageGroups: PageGroup[] = [];
  submitted = false;

  constructor(
    private pageGroupService: PageGroupService,
    private uploadedFileService: UploadedFileService,
    private notifierService: NotifierService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.pageGroupService.pageGroups
      .subscribe(pageGroups => this.pageGroups = pageGroups);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.page.previousValue !== changes.page.currentValue) {
      this.pageForm.patchValue(this.page);
    }
  }

  get f() { return this.pageForm.controls; }

  generateSlug(title: string) {
    this.pageForm.patchValue({ slug: title.toLowerCase().replace(/\s/g, '-') });
  }

  onSave() {
    this.submitted = true;

    if (this.pageForm.invalid) {
      return;
    }

    const data = new FormData();

    for (const key in this.pageForm.value) {
      if ( key === 'uploadedFiles') {
        this.f.uploadedFiles.value.forEach(file => {
          data.append('files[]', file);
        });
      } else {
        data.append(key, this.f[key].value);
      }
    }

    this.save.emit(data);
  }

  deleteFile(file: UploadedFile) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'the file';

    modalRef.componentInstance.delete.subscribe(() => {
      this.uploadedFileService.deleteFile(file.id).subscribe(() => {
        this.notifierService.notify('default', 'The file has been deleted.');
        this.page.files.splice(this.page.files.indexOf(file), 1);
      });
    });
  }

  openManagePageGroupsModal() {
    this.modalService.open(PageGroupModalComponent, { backdrop: 'static', keyboard: false });
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

  onCancel() {
    this.cancel.emit();
  }

  private validateSlug(control: AbstractControl) {
    return /^[_\-a-z0-9]+$/i.test(control.value) ? null : { invalidSlug: { value: control.value } };
  }
}
