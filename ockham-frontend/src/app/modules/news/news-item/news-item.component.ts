import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/models/news';
import { NewsService } from 'src/app/core/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  newsItem: News;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private notifierService: NotifierService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getNewsItem(params.get('id'));
    });
  }

  getNewsItem(id: string) {
    this.newsService.getNewsItem(id)
      .subscribe(item => {
        this.newsItem = item;
      }, () => {
        this.router.navigate(['/news']).then(() => {
          this.notifierService.notify('warning', 'The news item does not exist.');
        });
      });
  }

  get content() {
    // return this.sanitizer.sanitize(SecurityContext.HTML, this.newsItem.content);
    return this.sanitizer.bypassSecurityTrustHtml(this.newsItem.content);
  }
}
