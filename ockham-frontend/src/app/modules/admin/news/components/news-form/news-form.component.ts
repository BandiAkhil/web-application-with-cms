import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from 'src/app/core/models/news';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ColumnService } from 'src/app/core/services/column.service';
import { UploadedFile } from 'src/app/core/models/uploaded_file';
import { UploadedFileService } from 'src/app/core/services/uploaded-file.service';
import { NotifierService } from 'angular-notifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  @Input() news: News;
  @Output() save: EventEmitter<FormData> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  mode: string;
  newsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    flexible_column_values: new FormControl([]),
    uploadedFiles: new FormControl([])
  });
  submitted = false;

  constructor(
    private columnService: ColumnService,
    private uploadedFileService: UploadedFileService,
    private notifierService: NotifierService,
    private modalService: NgbModal) { }

  ngOnInit() {
    if (this.news) {
      this.newsForm.patchValue(this.news);
      this.newsForm.patchValue({ flexible_column_values: this.news.flexible_columns });
    } else {
      this.columnService.getColumns('news').subscribe(columns => this.newsForm.patchValue({ flexible_column_values: columns }));
    }
  }

  get f() { return this.newsForm.controls; }

  onSave() {
    this.submitted = true;

    if (this.newsForm.invalid) {
      return;
    }

    const data = new FormData();
    data.append('title', this.newsForm.value.title);
    data.append('content', this.newsForm.value.content);

    this.newsForm.value.uploadedFiles.forEach(file => {
      data.append('files[]', file);
    });

    data.append('flexible_column_values', JSON.stringify(this.newsForm.value.flexible_column_values));

    this.save.emit(data);
  }

  onCancel() {
    this.cancel.emit();
  }

  deleteFile(file: UploadedFile) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'the file';

    modalRef.componentInstance.delete.subscribe(() => {
      this.uploadedFileService.deleteFile(file.id).subscribe(() => {
        this.notifierService.notify('default', 'The file has been deleted.');
        this.news.files.splice(this.news.files.indexOf(file), 1);
      });
    });
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }
}
