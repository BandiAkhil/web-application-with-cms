import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivityOption } from 'src/app/core/models/activity';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss']
})
export class OptionListComponent implements OnInit {
  @Input() options: ActivityOption[] = [];
  @Input() canEdit = false;
  @Output() deleteEmitter: EventEmitter<any> = new EventEmitter();
  @Output() editEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(option: ActivityOption) {
    this.deleteEmitter.emit(option);
  }

  edit(option: ActivityOption) {
    this.editEmitter.emit(option);
  }

}
