import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnFormComponent } from 'src/app/modules/admin/columns/components/column-form/column-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ColumnFormComponent', () => {
  let component: ColumnFormComponent;
  let fixture: ComponentFixture<ColumnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnFormComponent],
      imports: [SharedModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
