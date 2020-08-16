import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/app/core/services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMemberModalComponent } from 'src/app/modules/admin/members/add-member-modal/add-member-modal.component';
import { RoleService } from 'src/app/core/services/role.service';
import { Role } from 'src/app/core/models/role';
import { StudyProgram } from 'src/app/core/models/study_program';
import { StudyProgramService } from 'src/app/core/services/study-program.service';
import { cloneDeep } from 'lodash';
import { DefaultBatchService } from 'src/app/core/services/default-batch.service';
import { ColumnService } from 'src/app/core/services/column.service';
import { Member } from 'src/app/core/models/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  mode: string;
  member: Member;
  studyPrograms: StudyProgram[] = [];
  roles: Role[] = [];
  memberForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    insertion: new FormControl(''),
    last_name: new FormControl('', Validators.required),
    initials: new FormControl('', Validators.required),
    phone_number: new FormControl(''),
    address: new FormControl(''),
    zip_code: new FormControl(''),
    residence: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    photos_allowed: new FormControl(false, Validators.required),
    date_of_membership: new FormControl(new Date(), Validators.required),
    role_id: new FormControl('', Validators.required),
    location_signup: new FormControl('', Validators.required),
    remark: new FormControl(''),
    memberable_type: new FormControl('student', Validators.required),
    flexible_column_values: new FormControl([])
  });
  studentForm = new FormGroup({
    study_program_id: new FormControl('', Validators.required),
    student_number: new FormControl('', Validators.required),
    track: new FormControl('bachelor', Validators.required),
    track_number: new FormControl('', Validators.required),
  });
  teacherForm = new FormGroup({
    department: new FormControl('', Validators.required),
    employee_number: new FormControl('', Validators.required)
  });
  bankAccountForm = new FormGroup({
    authorization_contribution: new FormControl(false, Validators.required),
    authorization_other: new FormControl(false, Validators.required),
    debtor_name: new FormControl('', Validators.required),
    iban: new FormControl('', Validators.required),
    bic: new FormControl('')
  });
  sepa = false;
  submitted = false;
  sepaSubmitted = false;
  studentSubmitted = false;
  teacherSubmitted = false;

  constructor(
    private memberService: MemberService,
    private roleService: RoleService,
    private studyProgramService: StudyProgramService,
    private columnService: ColumnService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService,
    private modalService: NgbModal,
    private defaultBatchService: DefaultBatchService) { }

  ngOnInit() {
    this.route.data.subscribe(({mode}) => {
      this.mode = mode;
      if (this.isEditRoute()) {
        this.route.paramMap.subscribe(params => {
          this.memberService.getMember(params.get('id'))
            .subscribe(member => {
              this.member = member;
              this.memberForm.patchValue(member);
              this.memberForm.patchValue({
                flexible_column_values: member.flexible_columns
              });
              this.memberForm.patchValue({
                role_id: member.role.id
              });
              if (member.bank_account) {
                this.sepa = true;
                this.bankAccountForm.patchValue(member.bank_account);
              }
              if (member.memberable_type === 'student') {
                this.studentForm.patchValue(member.memberable);
                this.studentForm.patchValue({
                  track: member.memberable.batch_bhp ? 'bachelor' : 'master',
                  track_number: member.memberable.batch_bhp || member.memberable.batch_mhp,
                  study_program_id: member.memberable.study_program ? member.memberable.study_program.id : null
                });
              } else {
                this.teacherForm.patchValue(member.memberable);
              }
            });
        });
      } else {
        this.studentForm.patchValue( {
          track_number: this.defaultBatchService.getValue()
        });
        this.columnService.getColumns('members').subscribe(columns => this.memberForm.patchValue({flexible_column_values: columns}));
      }
    });
    this.roleService.roles.subscribe(roles => {
      this.roles = roles;
      if (!this.memberForm.value.role_id) {
        this.memberForm.patchValue({role_id: roles.find(r => r.name === 'general_member').id});
      }
    });
    this.studyProgramService.studyPrograms.subscribe(studyPrograms => this.studyPrograms = studyPrograms);
  }

  get f() { return this.memberForm.controls; }

  get bf() { return this.bankAccountForm.controls; }

  get sf() { return this.studentForm.controls; }

  get tf() { return this.teacherForm.controls; }

  get memberType() {
    return this.memberForm.value.memberable_type;
  }

  onSave(addAnother = false) {
    this.submitted = true;

    this.sepaSubmitted = this.sepa;
    this.studentSubmitted = this.memberType === 'student';
    this.teacherSubmitted = this.memberType === 'teacher';

    if (this.memberForm.invalid ||
       (this.sepa && this.bankAccountForm.invalid) ||
       (this.memberType === 'student' && this.studentForm.invalid) ||
       (this.memberType === 'teacher' && this.teacherForm.invalid)) {
      return;
    }

    const member = cloneDeep(this.memberForm.value);

    member.bank_account = this.sepa ? this.bankAccountForm.value : null;

    if (member.memberable_type === 'student') {
      const memberable = cloneDeep(this.studentForm.value);
      if (memberable.track === 'bachelor') {
        memberable.batch_bhp = memberable.track_number;
      } else {
        memberable.batch_mhp = memberable.track_number;
      }

      delete memberable.track;
      delete memberable.track_number;

      member.memberable = memberable;
    } else if (member.memberable_type === 'teacher') {
      member.memberable = this.teacherForm.value;
    }

    for (const key in member) {
      if (member.hasOwnProperty(key) && member[key] === '') {
        member[key] = null; // Ensures that no empty values are sent to the backend, but null values
      }
    }

    if (this.isAddRoute()) {
      this.defaultBatchService.setValue(+this.studentForm.value.track_number);
      this.memberService.createMember(member)
        .subscribe(({id}) => {
          const modalRef = this.modalService.open(AddMemberModalComponent);
          modalRef.componentInstance.id = id;
          modalRef.result.then(() => {
            if (addAnother) {
              // TODO: change?
              window.location.reload();
            } else {
              this.router.navigate(['/admin/members']);
            }
          });
        }, error => {
          if (error.status === 400) {
            this.f.email.setErrors({alreadyInUse: true});
            this.notifierService.notify('error', 'The email address is already registered.');
          } else {
            this.notifierService.notify('error', 'Could not register member, try again later.');
          }
        });
    } else {
      this.memberService.updateMember(member, this.member.id)
        .subscribe(() => {
          this.router.navigate(['/admin/members']).then(() => {
            this.notifierService.notify('success', 'The member has been updated.');
          });
        }, error => {
          // TODO: better way of checking error?
          if (error.status === 400) {
            this.f.email.setErrors({alreadyInUse: true});
            this.notifierService.notify('error', 'The email address is already registered.');
          } else {
            this.notifierService.notify('error', 'Could not update member, try again later.');
          }
        });
    }
  }

  deleteMember() {
    this.memberService.deleteMember(this.member.id)
      .subscribe(() => {
        this.router.navigate(['/admin/members']).then(() => {
          this.notifierService.notify('success', 'The member has been deleted.');
        });
      });
  }

  archiveMember() {
    this.memberService.archiveMember(this.member.id)
      .subscribe(() => {
        this.router.navigate(['/admin/members']).then(() => {
          this.notifierService.notify('success', 'The member has been deleted.');
        });
      });
  }

  isAddRoute() {
    return this.mode === 'add';
  }

  isEditRoute() {
    return this.mode === 'edit';
  }
}
