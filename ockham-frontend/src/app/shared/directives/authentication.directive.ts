import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Directive({
  selector: '[showIfAuthed]'
})
export class AuthenticationDirective implements OnInit {
  @Input() set showIfAuthed(condition: boolean) {
    this.condition = condition;
  }

  condition: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private authenticationService: AuthenticationService,
    private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this.isAuthenticated();
  }

  private isAuthenticated() {
    this.authenticationService.isAuthenticatedObs().subscribe(
      (authed: boolean) => {
        if (authed && this.condition || !authed && !this.condition) {
          if (this.viewContainer.length === 0) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          }
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

}
