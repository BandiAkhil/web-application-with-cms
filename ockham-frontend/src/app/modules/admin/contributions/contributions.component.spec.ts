import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributionsComponent } from 'src/app/modules/admin/contributions/contributions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ContributionsComponent', () => {
  let component: ContributionsComponent;
  let fixture: ComponentFixture<ContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionsComponent ],
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule, NotifierModule, NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
