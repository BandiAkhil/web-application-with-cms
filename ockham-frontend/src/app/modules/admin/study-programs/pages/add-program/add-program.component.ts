import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import {StudyProgramService} from 'src/app/core/services/study-program.service';
import {StudyProgram} from 'src/app/core/models/study_program';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  constructor(
    private programService: StudyProgramService,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
  }

  onSave(program: StudyProgram) {
    this.programService.createProgram(program).subscribe(() => {
      this.router.navigate(['/admin/study-programs']).then(() => {
        this.notifierService.notify('success', 'Study program successfully created.');
      });
    }, error => {
      if (error.status === 400) {
        this.notifierService.notify('error', 'Short name should be unique');
      } else {
        this.notifierService.notify('error', 'Could not create program, try again later.');
      }
    });
  }

}
