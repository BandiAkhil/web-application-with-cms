import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/core/models/member';
import { MemberService } from 'src/app/core/services/member.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { ArchiveMemberModalComponent } from 'src/app/modules/admin/members/archive-member-modal/archive-member-modal.component';
import { ContributionModalComponent } from 'src/app/modules/admin/members/contribution-modal/contribution-modal.component';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  total: number;
  search: Subject<string> = new Subject();
  columnNames = [
    { key: 'id', name: 'ID' }, { key: 'first_name', name: 'First name' }, { key: 'insertion', name: 'Insertion' },
    { key: 'last_name', name: 'Last name' }, { key: 'initials', name: 'Initials' }, { key: 'email', name: 'Email' },
    { key: 'role.name', name: 'Role' }
  ];

  get columns() {
    return this.columnNames.map(c => c.key);
  }

  get headers() {
    return this.columnNames.map(c => c.name);
  }

  constructor(
    private memberService: MemberService,
    private notifierService: NotifierService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getMembers();
    this.listenOnSearchChanges();
  }

  private listenOnSearchChanges() {
    this.search.pipe(
      debounceTime(800),
      switchMap((value: string) => {
        return this.memberService.getMembers({ offset: 0, limit: 10, term: value });
      })
    ).subscribe(res => {
      this.members = res.data;
      this.total = res.total;
    });
  }

  getMembers(filter = { offset: 0, limit: 10 }) {
    this.memberService.getMembers(filter)
      .subscribe(res => {
        this.members = res.data;
        this.total = res.total;
      });
  }

  getMembersExport() {
    this.memberService.getMembersExport()
      .subscribe(response => {
        const blob = new Blob([response.body], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = this.getFileName(response);
        link.click();
      });
  }

  onMembersImport(files: FileList) {
    const file = files.item(0);
    this.memberService.importMembers(file)
      .subscribe(() => {
        this.notifierService.notify('success', 'The members have been successfully imported.');
        this.getMembers();
      }, error => {
        this.notifierService.notify('error', `An error occurred: ${error.error.message}`);
      });
  }

  private getFileName(httpResponse) {
    const contentDispositionHeader = httpResponse.headers.get('Content-Disposition');
    const result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
    return result.replace(/"/g, '');
  }

  editMember(row) {
    this.router.navigate([`/admin/members/${row.id}/edit`]);
  }

  deleteMember(row) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'this member';

    modalRef.componentInstance.delete.subscribe(() => {
      this.memberService.deleteMember(row.id).subscribe(() => {
        this.notifierService.notify('success', 'Member successfully deleted.');
        this.getMembers();
      });
    });
  }

  archiveMember(row) {
    const modalRef = this.openArchiveModal();
    modalRef.componentInstance.member = row;

    modalRef.componentInstance.archive.subscribe(() => {
      this.memberService.archiveMember(row.id).subscribe(() => {
        modalRef.close();
        this.notifierService.notify('success', 'Member successfully archived.');
        this.getMembers();
      });
    });
  }

  viewContributions(row) {
    const modalRef = this.openContributionModal();
    modalRef.componentInstance.member = row;
  }

  onPageChange(filter: any) {
    this.getMembers(filter);
  }

  private openContributionModal() {
    return this.modalService.open(ContributionModalComponent);
  }

  private openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

  private openArchiveModal() {
    return this.modalService.open(ArchiveMemberModalComponent);
  }
}
