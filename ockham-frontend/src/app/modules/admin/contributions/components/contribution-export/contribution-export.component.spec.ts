import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributionExportComponent } from 'src/app/modules/admin/contributions/components/contribution-export/contribution-export.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ContributionExportComponent', () => {
  let component: ContributionExportComponent;
  let fixture: ComponentFixture<ContributionExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionExportComponent ],
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
