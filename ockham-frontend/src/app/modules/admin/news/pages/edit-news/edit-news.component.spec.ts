import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditNewsComponent } from 'src/app/modules/admin/news/pages/edit-news/edit-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsFormComponent } from 'src/app/modules/admin/news/components/news-form/news-form.component';

describe('EditNewsComponent', () => {
  let component: EditNewsComponent;
  let fixture: ComponentFixture<EditNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsComponent, NewsFormComponent ],
      imports: [ SharedModule, HttpClientTestingModule, NotifierModule, RouterTestingModule ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
