import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMemberModalComponent } from 'src/app/modules/admin/members/add-member-modal/add-member-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('AddMemberModalComponent', () => {
  let component: AddMemberModalComponent;
  let fixture: ComponentFixture<AddMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemberModalComponent ],
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule, NotifierModule, NgbModule],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
