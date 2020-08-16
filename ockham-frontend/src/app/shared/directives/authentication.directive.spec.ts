import { AuthenticationDirective } from 'src/app/shared/directives/authentication.directive';

describe('AuthenticationDirective', () => {
  it('should create an instance', () => {
    const directive = new AuthenticationDirective(null, null, null);
    expect(directive).toBeTruthy();
  });
});
