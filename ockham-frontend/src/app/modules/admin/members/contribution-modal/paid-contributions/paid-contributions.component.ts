import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberContribution } from 'src/app/core/models/member';

@Component({
  selector: 'app-paid-contributions',
  templateUrl: './paid-contributions.component.html',
  styleUrls: ['./paid-contributions.component.scss']
})
export class PaidContributionsComponent implements OnInit {
  @Input() contributions: MemberContribution[];
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(row: MemberContribution) {
    this.delete.emit(row);
  }

  onEdit(row: MemberContribution) {
    this.edit.emit(row);
  }

}
