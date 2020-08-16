import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { MailingList } from 'src/app/core/models/mailing_list';
import { MailingListService } from 'src/app/core/services/mailing-list.service';

@Component({
  selector: 'app-mailing-lists',
  templateUrl: './mailing-lists.component.html',
  styleUrls: ['./mailing-lists.component.scss']
})
export class MailingListsComponent implements OnInit {

  mailingLists: MailingList[];

  constructor(private mailingListService: MailingListService, private notifierService: NotifierService) { }

  ngOnInit() {
    this.getMailingLists();
  }

  getMailingLists() {
    this.mailingListService.mailingLists.subscribe(mailingLists => this.mailingLists = mailingLists);
  }

  subscribeToMailingList(mailingList: MailingList) {
    this.mailingListService.subscribeToMailingList(mailingList.id)
      .subscribe(() => {
        this.notifierService.notify('success', `You are now subscribed to ${mailingList.name}.`);
        this.mailingListService.fetchMailingLists().subscribe(mailingLists => this.mailingLists = mailingLists);
      }, error => {
        this.notifierService.notify('error', `An error occurred: ${error.error.message}`);
      });
  }

  unsubscribeFromMailingList(mailingList: MailingList) {
    this.mailingListService.unsubscribeFromMailingList(mailingList.id)
      .subscribe(() => {
        this.notifierService.notify('success', `You are now unsubscribed from ${mailingList.name}.`);
        this.mailingListService.fetchMailingLists().subscribe(mailingLists => this.mailingLists = mailingLists);
      }, error => {
        this.notifierService.notify('error', `An error occurred: ${error.error.message}`);
      });
  }
}
