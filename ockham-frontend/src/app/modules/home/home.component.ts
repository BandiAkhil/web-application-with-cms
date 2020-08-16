import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { ActivityService } from 'src/app/core/services/activity.service';
import { Activity } from 'src/app/core/models/activity';
import { News } from 'src/app/core/models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    {
      title: 'Activities',
      subTitle: 'Find out what\'s currently on the agenda',
      navigateRoute: '/activities',
      showFirst: true,
      imgSrc: 'assets/img/slide-image-1.jpg'
    },
    {
      title: 'Companies',
      subTitle: 'Discover our sponsors',
      navigateRoute: '/companies',
      showFirst: false,
      imgSrc: 'assets/img/slide-image-2.jpg'
    },
    {
      title: 'The board',
      subTitle: 'Meet the 11th Board of H.V.Ockham!',
      navigateRoute: '/board',
      showFirst: false,
      imgSrc: 'assets/img/slide-image-3.jpg'
    }
  ];

  news: News[] = [];
  activities: Activity[] = [];

  constructor(private newsService: NewsService, private activityService: ActivityService) { }

  ngOnInit() {
    this.newsService.getNews(5).subscribe(news => this.news = news);
    this.activityService.getRecentActivities(4).subscribe(activities => this.activities = activities);
  }
}
