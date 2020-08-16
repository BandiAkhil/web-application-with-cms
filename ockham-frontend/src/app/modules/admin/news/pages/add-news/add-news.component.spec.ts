import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewsComponent } from 'src/app/modules/admin/news/pages/add-news/add-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';
import { NewsFormComponent } from 'src/app/modules/admin/news/components/news-form/news-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsComponent, NewsFormComponent ],
      imports: [ SharedModule, HttpClientTestingModule, NotifierModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
