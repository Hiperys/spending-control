import { Component } from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  form: FormGroup;

  constructor(private fb: FormBuilder, public auth: AuthService) {
    this.form = fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form);
    }
    console.log(this.form);
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }

  logout() {
    this.auth.logout();
  }

}
