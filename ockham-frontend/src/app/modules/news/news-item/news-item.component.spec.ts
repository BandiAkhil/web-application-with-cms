import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsItemComponent } from 'src/app/modules/news/news-item/news-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsItemComponent],
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule, NotifierModule ],
      providers: [{ provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ id: 1 })) } } ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
