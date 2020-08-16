import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Member } from 'src/app/core/models/member';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-archive-member-modal',
  templateUrl: './archive-member-modal.component.html',
  styleUrls: ['./archive-member-modal.component.scss']
})
export class ArchiveMemberModalComponent implements OnInit {
  @Input() member: Member;
  @Output() archive: EventEmitter<void> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onArchive() {
    this.archive.emit();
  }

  close() {
    this.activeModal.close();
  }
}
