import { FormGroup } from '@angular/forms';

export function samePasswords(group: FormGroup) {
  const newPassword = group.get('new_password').value;
  const repeatNewPassword = group.get('repeat_new_password').value;

  return newPassword === repeatNewPassword ? null : { notSame: true };
}
