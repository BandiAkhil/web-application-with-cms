import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPageComponent } from 'src/app/modules/admin/page-management/pages/add-page/add-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { PageFormComponent } from 'src/app/modules/admin/page-management/components/page-form/page-form.component';
import { PageGroupService } from 'src/app/core/services/page-group.service';
import { PageGroupStubService } from 'src/app/core/mocks/page-group-stub';

describe('AddPageComponent', () => {
  let component: AddPageComponent;
  let fixture: ComponentFixture<AddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPageComponent, PageFormComponent ],
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule, NotifierModule ],
      providers: [{ provide: PageGroupService, useValue: PageGroupStubService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
