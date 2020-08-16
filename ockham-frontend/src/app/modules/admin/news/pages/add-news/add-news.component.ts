import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  constructor(
    private newsService: NewsService,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
  }

  onSave(data: FormData) {
    this.newsService.createNewsItem(data).subscribe(() => {
      this.router.navigate(['/admin/news']).then(() => {
        this.notifierService.notify('success', 'News item successfully created.');
      });
    });
  }

  onCancel() {
    this.router.navigate(['/admin/news']);
  }
}
