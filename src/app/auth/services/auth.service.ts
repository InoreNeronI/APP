import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment} from '../../../environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  private currentToken;

  constructor(
    private http: HttpClient,
    private router: Router
    //private _http: HttpClient,
  ) { }

  login({ email, password }) {

    const response$ = this.http.post(
      environment.api.login,
      {
        observe: 'response',
        email,
        password
      }
    );

    response$.subscribe(response => {
      if(response){
        localStorage.setItem('currentUser', JSON.stringify(email));
        this.router.navigate(['/']);
      }
    });

    return response$;

  }

  register({firstName, lastName, email, password}) {
    const response$ = this.http.post(
      environment.api.user,
      {
        observe: 'response',
        email,
        password
      }
    )

    response$.subscribe(response =>{
      console.log(response);
      if(response && response['id']){
        this.router.navigate(['/auth']);
      }
    });

    return response$;
  }

  isLogged(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }

}
