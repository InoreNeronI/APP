import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{
  error: any;
  loading = true;

  subject = {
    title: 'mate',
    nivel: 'medio'
  };

  form: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email] ),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loading = false;
  }

  login(): void {
    const resp = this.authService.login(this.form.value);

    resp.subscribe(
      (response) => {
        console.log('response received')
      },
      (error) => {
        console.error('error caught in component')
        this.error = error;
      }
    );
  }


}
