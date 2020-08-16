import { FormGroup } from '@angular/forms';

export function activityDates(group: FormGroup) {
  const start_date = group.get('start_date').value;
  const end_date = group.get('end_date').value;
  const registration_opens = group.get('registration_opens').value;
  const registration_closes = group.get('registration_closes').value;

  const errors: any = {};
  if (registration_opens >= registration_closes) {
    errors.invalid_registration_closes = true;
  }

  if (registration_closes > start_date) {
    errors.invalid_start_date = true;
  }

  if (start_date >= end_date) {
    errors.invalid_end_date = true;
  }
  return errors !== {} ? errors : null;
}
