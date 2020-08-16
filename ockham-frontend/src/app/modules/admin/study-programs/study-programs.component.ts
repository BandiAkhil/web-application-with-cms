import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { StudyProgram } from 'src/app/core/models/study_program';
import { StudyProgramService } from 'src/app/core/services/study-program.service';

@Component({
  selector: 'app-study-programs',
  templateUrl: './study-programs.component.html',
  styleUrls: ['./study-programs.component.scss']
})
export class StudyProgramsComponent implements OnInit {

  programs: StudyProgram[];

  constructor(
    private programService: StudyProgramService,
    private router: Router,
    private modalService: NgbModal,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.getPrograms();
  }

  getPrograms() {
    this.programService.fetchStudyPrograms().subscribe(programs => this.programs = programs);
  }

  onEdit(row) {
    this.router.navigate([`/admin/study-programs/${row.id}/edit`]);
  }

  onDelete(row) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'this study program';

    modalRef.componentInstance.delete.subscribe(() => {
      this.programService.deleteProgram(row.id).subscribe(() => {
        this.notifierService.notify('success', 'Study program successfully deleted.');
        this.programService.fetchStudyPrograms().subscribe(programs => this.programs = programs);
      }, () => {
        this.notifierService.notify('success', 'Study program could not be deleted.');
      });
    });
  }

}
