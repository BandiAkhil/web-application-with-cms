import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditColumnComponent } from 'src/app/modules/admin/columns/pages/edit-column/edit-column.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotifierModule } from 'angular-notifier';
import { ColumnFormComponent } from 'src/app/modules/admin/columns/components/column-form/column-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditColumnComponent', () => {
  let component: EditColumnComponent;
  let fixture: ComponentFixture<EditColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditColumnComponent, ColumnFormComponent ],
      imports: [ SharedModule, NotifierModule, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
