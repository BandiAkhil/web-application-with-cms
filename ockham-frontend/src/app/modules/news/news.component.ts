import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/models/news';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  paginationPage = 0;
  paginationSize = 10;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(news => this.news = news);
  }
}
