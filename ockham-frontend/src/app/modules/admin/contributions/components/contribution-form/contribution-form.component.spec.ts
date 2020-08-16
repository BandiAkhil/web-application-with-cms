import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributionFormComponent } from 'src/app/modules/admin/contributions/components/contribution-form/contribution-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ContributionFormComponent', () => {
  let component: ContributionFormComponent;
  let fixture: ComponentFixture<ContributionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionFormComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
