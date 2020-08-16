import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditOptionModalComponent } from 'src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OptionFormComponent } from 'src/app/modules/admin/activity-management/components/option-form/option-form.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditOptionModalComponent', () => {
  let component: EditOptionModalComponent;
  let fixture: ComponentFixture<EditOptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOptionModalComponent, OptionFormComponent ],
      imports: [SharedModule, NgbModule, HttpClientTestingModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
