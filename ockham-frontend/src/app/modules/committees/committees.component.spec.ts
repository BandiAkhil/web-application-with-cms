import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommitteesComponent } from 'src/app/modules/committees/committees.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommitteesComponent', () => {
  let component: CommitteesComponent;
  let fixture: ComponentFixture<CommitteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteesComponent ],
      imports: [ SharedModule, RouterTestingModule, NotifierModule, NgbModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
