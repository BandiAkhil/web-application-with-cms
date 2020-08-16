import { Component, OnInit } from '@angular/core';
import { CommitteeService } from 'src/app/core/services/committee.service';
import { Committee } from 'src/app/core/models/committee';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.scss']
})
export class CommitteesComponent implements OnInit {

  committees: Committee[] = [];
  paginationPage = 0;
  paginationSize = 10;

  constructor(private committeeService: CommitteeService) { }

  ngOnInit() {
    this.committeeService.fetchCommittees().subscribe(committees => {
      this.committees = committees;
    });
  }
}
