import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  loading = true;
  error: boolean;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required ] ),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loading = false;
  }

  register(): void {
    this.authService.register(this.form.value);
  }

}
