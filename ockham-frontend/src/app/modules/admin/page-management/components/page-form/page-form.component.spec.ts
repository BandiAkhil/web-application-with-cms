import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageFormComponent } from 'src/app/modules/admin/page-management/components/page-form/page-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotifierModule } from 'angular-notifier';
import { PageGroupService } from 'src/app/core/services/page-group.service';
import { of } from 'rxjs';
import { PageGroupStubService } from 'src/app/core/mocks/page-group-stub';

describe('PageFormComponent', () => {
  let component: PageFormComponent;
  let fixture: ComponentFixture<PageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFormComponent ],
      imports: [ SharedModule, HttpClientTestingModule, NotifierModule ],
      providers: [ { provide: PageGroupService, useValue: PageGroupStubService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
