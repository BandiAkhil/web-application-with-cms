import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommitteesComponent } from 'src/app/modules/admin/committees/committees.component';

describe('CommitteesComponent', () => {
  let component: CommitteesComponent;
  let fixture: ComponentFixture<CommitteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
