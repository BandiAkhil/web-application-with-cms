import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaidContributionsComponent } from 'src/app/modules/admin/members/contribution-modal/paid-contributions/paid-contributions.component';

describe('PaidContributionsComponent', () => {
  let component: PaidContributionsComponent;
  let fixture: ComponentFixture<PaidContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
