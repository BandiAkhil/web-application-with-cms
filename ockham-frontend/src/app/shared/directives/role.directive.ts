import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from 'src/app/core/services/authentication.service';

@Directive({
  selector: '[showIfRole]'
})
export class RoleDirective implements OnInit {
  @Input() set showIfRole(role: string) {
    this.role = role;
  }

  private role: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthenticationService,
    private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    this.hasRequiredRole();
  }

  private hasRequiredRole() {
    this.authService.hasRole(this.role).then(hasRole => {
      if (hasRole) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }, () => this.viewContainer.clear());
  }
}
