import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MailingListsComponent } from 'src/app/modules/account/mailing-lists/mailing-lists.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';

describe('MailingListsComponent', () => {
  let component: MailingListsComponent;
  let fixture: ComponentFixture<MailingListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingListsComponent ],
      imports: [HttpClientTestingModule, NotifierModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
