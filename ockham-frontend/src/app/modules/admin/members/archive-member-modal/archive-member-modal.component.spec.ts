import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchiveMemberModalComponent } from 'src/app/modules/admin/members/archive-member-modal/archive-member-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Member } from 'src/app/core/models/member';

const member: Member = {
  id: 1,
  email: 'test',
  role: null,
  last_name: 'Test',
  first_name: 'T',
  initials: 'string',
  date_of_membership: 'string',
  photos_allowed: false,
  created_at: 'string',
  updated_at: 'string',
  memberable_type: 'string',
  memberable: '',
  flexible_columns: [],
  archived_at: 'string'
};

describe('ArchiveMemberModalComponent', () => {
  let component: ArchiveMemberModalComponent;
  let fixture: ComponentFixture<ArchiveMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMemberModalComponent ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMemberModalComponent);
    component = fixture.componentInstance;
    component.member = member;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
