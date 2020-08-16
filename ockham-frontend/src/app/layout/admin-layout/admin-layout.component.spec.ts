import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLayoutComponent } from 'src/app/layout/admin-layout/admin-layout.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AuthenticationDirective } from 'src/app/shared/directives/authentication.directive';
import { RoleDirective } from 'src/app/shared/directives/role.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PageGroupService } from 'src/app/core/services/page-group.service';
import { PageGroupStubService } from 'src/app/core/mocks/page-group-stub';

describe('AdminLayoutComponent', () => {
  let component: AdminLayoutComponent;
  let fixture: ComponentFixture<AdminLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutComponent, HeaderComponent, AuthenticationDirective, RoleDirective],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ {provide: PageGroupService, useValue: PageGroupStubService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
