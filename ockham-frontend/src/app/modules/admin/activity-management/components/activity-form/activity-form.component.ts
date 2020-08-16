import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from 'src/app/core/models/activity';
import { first } from 'rxjs/operators';
import { CommitteeService } from 'src/app/core/services/committee.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DatePipe } from '@angular/common';
import { cloneDeep } from 'lodash';
import { ColumnService } from 'src/app/core/services/column.service';
import { EurToCentsPipe } from 'src/app/shared/pipes/eur-to-cents.pipe';
import { CentsToEurPipe } from 'src/app/shared/pipes/cents-to-eur.pipe';
import { MemberService } from 'src/app/core/services/member.service';
import { activityDates } from 'src/app/shared/validators/activity-dates.validator';
import { UploadedFileService } from 'src/app/core/services/uploaded-file.service';
import { UploadedFile } from 'src/app/core/models/uploaded_file';
import { NotifierService } from 'angular-notifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Input()
  set activity(activity: Activity) {
    if (activity) {
      this._activity = activity;
      this.activityForm.patchValue(activity);
      this.activityForm.patchValue({
        price: new CentsToEurPipe().transform(activity.price_cents),
        start_date: this.toDateObj(activity.start_date),
        end_date: this.toDateObj(activity.end_date),
        registration_closes: this.toDateObj(activity.registration_closes),
        registration_opens: this.toDateObj(activity.registration_opens)
      });
      this.activityForm.patchValue({ flexible_column_values: activity.flexible_columns });
      this.activityForm.patchValue({ committee_id: activity.committee.id });
      this.listenOnFormChanges();
    }
  }

  description: string;
  activityForm: FormGroup;
  submitted = false;
  formDirty = false;
  _activity: Activity;
  committees = [];

  constructor(
    private formBuilder: FormBuilder,
    private committeeService: CommitteeService,
    private authService: AuthenticationService,
    private columnService: ColumnService,
    private memberService: MemberService,
    private uploadedFileService: UploadedFileService,
    private notifierService: NotifierService,
    private modalService: NgbModal) {
    this.activityForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      start_date: [null, Validators.required],
      end_date: ['', Validators.required],
      price: ['0.00', [Validators.required, Validators.pattern('^[-]?(\\d+(?:\\.\\d{0,2})?)$'), Validators.min(0), Validators.max(2147483647)]],
      committee_id: ['', Validators.required],
      registration_opens: ['', Validators.required],
      registration_closes: ['', Validators.required],
      flexible_column_values: [[]],
      uploadedFiles: [[]],
    }, { validators: activityDates });
  }

  ngOnInit() {
    const member = this.authService._getUser();
    if (!member) {
      return;
    }
    this.getCommittees(member.id);

    if (!this._activity) {
      this.columnService.getColumns('activities')
        .subscribe(columns => {
          if (!this._activity) {
            this.activityForm.patchValue({ flexible_column_values: columns });
          }
        });
    }
  }

  listenOnFormChanges() {
    this.activityForm.valueChanges.pipe(
      first(),
    ).subscribe(() => {
      this.formDirty = true;
    });
  }

  getCommittees(id) {
    this.memberService.getMemberCommittees(id).subscribe(
      committees => {
        this.committees = committees;
      }
    );
  }

  /*
    Transforms a string format of a date
    to a Date object acceptable by datetime-picker.
  */
  toDateObj(date: string) {
    return new Date(date);
  }

  /*
    Formats a date object to a string format
    acceptable by back-end.
  */
  format(date: Date) {
    return new DatePipe('en-GB').transform(date, 'yyyy-MM-dd HH:mm:ss', 'GMT+2');
  }

  get f() {
    return this.activityForm.controls;
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

  deleteFile(file: UploadedFile) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'the file';

    modalRef.componentInstance.delete.subscribe(() => {
      this.uploadedFileService.deleteFile(file.id).subscribe(() => {
        this.notifierService.notify('default', 'The file has been deleted.');
        this._activity.files.splice(this._activity.files.indexOf(file), 1);
      });
    });
  }

  onSave() {
    this.submitted = true;

    if (this.activityForm.invalid) {
      return;
    }

    const activity = cloneDeep(this.activityForm.value);
    const data = new FormData();

    for (const key in activity) {
      if (key === 'price') {
        data.append('price_cents', new EurToCentsPipe().transform(activity[key]));
      } else if (key.includes('date') || key === 'registration_opens' || key === 'registration_closes') {
        data.append(key, this.format(activity[key]));
      } else if (key === 'flexible_column_values') {
        data.append(key, JSON.stringify(activity.flexible_column_values));
      } else if (key === 'uploadedFiles') {
        this.activityForm.value.uploadedFiles.forEach(file => {
          data.append('files[]', file);
        });
      } else {
        data.append(key, activity[key]);
      }
    }
    this.save.emit(data);
  }
}
