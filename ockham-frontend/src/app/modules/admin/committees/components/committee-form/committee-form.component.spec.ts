import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommitteeFormComponent } from 'src/app/modules/admin/committees/components/committee-form/committee-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommitteeFormComponent', () => {
  let component: CommitteeFormComponent;
  let fixture: ComponentFixture<CommitteeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteeFormComponent ],
      imports: [ SharedModule, RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
