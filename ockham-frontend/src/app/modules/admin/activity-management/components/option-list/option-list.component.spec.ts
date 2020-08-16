import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OptionListComponent } from 'src/app/modules/admin/activity-management/components/option-list/option-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OptionListComponent', () => {
  let component: OptionListComponent;
  let fixture: ComponentFixture<OptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionListComponent ],
      imports: [SharedModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
