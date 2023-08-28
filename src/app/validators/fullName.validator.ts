import { AbstractControl, ValidationErrors } from '@angular/forms';

export function fullNameValidator(control: AbstractControl): ValidationErrors | null {
  const fullNamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/; // Regular expression for first name + space + last name

  if (!fullNamePattern.test(control.value)) {
    return { invalidFullName: true };
  }

  return null;
}