import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  active = 'details';

  constructor() { }

  ngOnInit() {
  }

  isActive(tab: string) {
    return this.active === tab;
  }

  setActive(tab: string) {
    if (this.active === tab) { return; }
    this.active = tab;
  }
}
