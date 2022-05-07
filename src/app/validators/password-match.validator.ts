import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
  const pass = group.get('password');
  if (pass?.pristine) {
    return null;
  }
  const confirmPass = group.get('confirmPassword')
  if (confirmPass?.pristine) {
    return null;
  }
  return pass?.value === confirmPass?.value ? null : { notSame: true }
}
