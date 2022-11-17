import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface userDetails {
  userName: FormControl<string>;
  passWord: FormControl<any>;
  phone: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  validatedForm = null;

  registerForm = new FormGroup({
    userName: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl<any>('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ],
      nonNullable: true,
    }),
    phone: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      validators: [Validators.required],
    }),

  });
  get userName() {
    return this.registerForm.get('userName');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get email() {
    return this.registerForm.get('email');
  }

  register() {
    if (this.registerForm.valid) {
      alert(
        'Registration Complete! You will receive a confirmation email at: ' +
          this.registerForm.value.email
      );
    } else {
      alert('Please update your information.');
    }
  }
}
