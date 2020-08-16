import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddColumnComponent } from 'src/app/modules/admin/columns/pages/add-column/add-column.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotifierModule } from 'angular-notifier';
import { ColumnFormComponent } from 'src/app/modules/admin/columns/components/column-form/column-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddColumnComponent', () => {
  let component: AddColumnComponent;
  let fixture: ComponentFixture<AddColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColumnComponent, ColumnFormComponent ],
      imports: [ SharedModule, NotifierModule, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
