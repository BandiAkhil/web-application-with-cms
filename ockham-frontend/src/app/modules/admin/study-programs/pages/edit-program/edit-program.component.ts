import { Component, OnInit } from '@angular/core';
import { StudyProgram } from 'src/app/core/models/study_program';
import { StudyProgramService } from 'src/app/core/services/study-program.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.scss']
})
export class EditProgramComponent implements OnInit {

  program: StudyProgram;

  constructor(
    private programService: StudyProgramService,
    private router: Router,
    private notifierService: NotifierService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.programService.getProgram(params.get('id')).subscribe(program => {
        this.program = program;
      });
    });
  }

  onSave(program: StudyProgram) {
    this.programService.editProgram(program).subscribe(() => {
      this.router.navigate(['/admin/study-programs']).then(() => {
        this.notifierService.notify('success', 'Study program successfully updated.');
      });
    }, error => {
      if (error.status === 400) {
        this.notifierService.notify('error', 'Short name should be unique');
      } else {
        this.notifierService.notify('error', 'Could not update program, try again later.');
      }
    });
  }

}
