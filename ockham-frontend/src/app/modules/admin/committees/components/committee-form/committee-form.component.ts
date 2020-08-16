import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Member } from 'src/app/core/models/member';
import { Committee } from 'src/app/core/models/committee';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommitteeMemberModalComponent } from 'src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { ColumnService } from 'src/app/core/services/column.service';

@Component({
  selector: 'app-committee-form',
  templateUrl: './committee-form.component.html',
  styleUrls: ['./committee-form.component.scss']
})
export class CommitteeFormComponent implements OnInit {
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Input()
  set committee(committee: Committee) {
    if (committee) {
      this._committee = committee;
      this._committee.memberships.forEach(function(m) {
        this.push(m.member);
      }, this.committeeMembers);
      this.committeeForm.patchValue(committee);
      this.committeeForm.patchValue({ flexible_column_values: committee.flexible_columns });
      this.listenOnFormChanges();
    }
  }

  committeeForm: FormGroup;
  submitted = false;
  formDirty = false;
  _committee: Committee;
  committeeMembers: Member[] = [];

  constructor(
    private columnService: ColumnService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) {
    this.committeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      flexible_column_values: ['']
    });
  }

  ngOnInit() {
    if (!this._committee) {
      this.columnService.getColumns('committees')
        .subscribe(columns => {
          if (!this._committee) {
            this.committeeForm.patchValue({ flexible_column_values: columns });
          }
        });
    }
  }

  listenOnFormChanges() {
    this.committeeForm.valueChanges.pipe(
      first(),
    ).subscribe(() => {
      this.formDirty = true;
    });
  }

  get f() {
    return this.committeeForm.controls;
  }

  addMembers(editMember?: Member) {
    const modalRef = this.modalService.open(CommitteeMemberModalComponent, { backdrop: 'static' });

    modalRef.componentInstance.add.subscribe(members => {
      members.forEach(function(member) {
        if (this.findIndex(m => m.id === member.id) === -1) {
          this.push(member);
        }
      }, this.committeeMembers);
      if (editMember) {
        this.committeeMembers = this.committeeMembers.filter(m => m !== editMember);
      }
    });
  }

  deleteMember(member: Member) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'this member from this committee';

    modalRef.componentInstance.delete.subscribe(() => {
      this.committeeMembers = this.committeeMembers.filter(members => members.id !== member.id);
    });
  }

  private openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

  onSave() {
    this.submitted = true;

    if (this.committeeForm.invalid) {
      return;
    }

    const committee = Object.assign({}, this.committeeForm.value);
    committee.members = [];
    if (this._committee) {
      committee.id = this._committee.id;
    }
    this.committeeMembers.forEach((m) => {
      committee.members.push(m.id);
    });
    this.save.emit(committee);
  }

}
