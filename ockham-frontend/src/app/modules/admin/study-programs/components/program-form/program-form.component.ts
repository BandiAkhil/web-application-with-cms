import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudyProgram } from 'src/app/core/models/study_program';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrls: ['./program-form.component.scss']
})
export class ProgramFormComponent implements OnInit {
  @Input() program: StudyProgram;
  @Output() save: EventEmitter<StudyProgram> = new EventEmitter();

  programForm = new FormGroup({
    short_name: new FormControl('', Validators.required),
    full_name: new FormControl('', Validators.required)
  });
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.program) {
      this.programForm.patchValue(this.program);
    }
  }

  get f() { return this.programForm.controls; }

  onSave() {
    this.submitted = true;

    if (this.programForm.invalid) {
      return;
    }

    const program = Object.assign({}, this.programForm.value) as StudyProgram;
    if (this.program) {
      program.id = this.program.id;
    }

    this.save.emit(program);
  }

  onCancel() {
    this.router.navigate(['admin/study-programs']);
  }

}
