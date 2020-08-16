import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OptionFormComponent } from 'src/app/modules/admin/activity-management/components/option-form/option-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OptionFormComponent', () => {
  let component: OptionFormComponent;
  let fixture: ComponentFixture<OptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionFormComponent ],
      imports: [SharedModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
