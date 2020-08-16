import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { News } from 'src/app/core/models/news';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

  news: News;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.newsService.getNewsItem(params.get('id')).subscribe(news => {
        this.news = news;
      });
    });
  }

  onSave(data: FormData) {
    this.newsService.updateNewsItem(data, this.news.id).subscribe(() => {
      this.router.navigate(['/admin/news']).then(() => {
        this.notifierService.notify('success', 'News item successfully updated.');
      });
    });
  }

  onCancel() {
    this.router.navigate(['/admin/news']);
  }
}
