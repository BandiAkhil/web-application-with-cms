import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/models/news';
import { NewsService } from 'src/app/core/services/news.service';
import { Router } from '@angular/router';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router,
    private modalService: NgbModal,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(news => this.news = news);
  }

  onEdit(row) {
    this.router.navigate([`/admin/news/${row.id}/edit`]);
  }

  onDelete(row) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'news';

    modalRef.componentInstance.delete.subscribe(() => {
      this.newsService.deleteNewsItem(row.id).subscribe(() => {
        this.notifierService.notify('success', 'News item successfully deleted.');
        this.getNews();
      });
    });
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }
}
