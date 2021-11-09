import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmpassword = control.get('confirmpassword');
            
  if (password?.value === confirmpassword?.value)
  {   
    return null;
    
  }
  else
    return {passwordMismatch: true};
};


