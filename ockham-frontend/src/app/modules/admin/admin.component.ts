import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sections = [
    {
      name: 'Manage pages',
      icon: 'view_compact',
      linkTo: 'pages',
      requiredRole: 'board'
    },
    {
      name: 'Manage members',
      icon: 'supervisor_account',
      linkTo: 'members',
      requiredRole: 'board'
    },
    {
      name: 'Manage activities',
      icon: 'emoji_food_beverage',
      linkTo: 'activities',
      requiredRole: 'committee_member'
    },
    {
      name: 'Manage committees',
      icon: 'storefront',
      linkTo: 'committees',
      requiredRole: 'committee_member'
    },
    {
      name: 'Manage news',
      icon: 'event_note',
      linkTo: 'news',
      requiredRole: 'board'
    },
    {
      name: 'Manage contributions',
      icon: 'monetization_on',
      linkTo: 'contributions',
      requiredRole: 'board'
    },
    {
      name: 'Manage study programs',
      icon: 'school',
      linkTo: 'study-programs',
      requiredRole: 'board'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
