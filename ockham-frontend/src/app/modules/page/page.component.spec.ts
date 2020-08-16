import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageComponent } from 'src/app/modules/page/page.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { NotifierModule } from 'angular-notifier';

const page = {
  id: 1,
  slug: 'test',
  title: 'test',
  content: 'TEST PAGE',
  page_group_id: '1',
  created_at: 'string',
  updated_at: 'string',
  files: []
};

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageComponent],
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule, NotifierModule],
      providers: [{ provide: ActivatedRoute, useValue: { data: of({ page }) } }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
