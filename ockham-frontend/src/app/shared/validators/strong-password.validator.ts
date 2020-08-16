import {AbstractControl} from '@angular/forms';

export function strongPassword(control: AbstractControl) {

  const regex = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])');

  if (control.value !== undefined && regex.test(control.value)) {
    return null;
  }
  return { notStrong: true };
}
