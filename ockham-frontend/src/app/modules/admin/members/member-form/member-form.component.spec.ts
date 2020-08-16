import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberFormComponent } from 'src/app/modules/admin/members/member-form/member-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';

describe('MemberFormComponent', () => {
  let component: MemberFormComponent;
  let fixture: ComponentFixture<MemberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberFormComponent ],
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule, NotifierModule ],
      providers: [ {provide: ActivatedRoute, useValue: { data: of('edit')} } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
