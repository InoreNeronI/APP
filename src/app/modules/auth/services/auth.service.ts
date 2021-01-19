import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment} from '../../../../environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  private currentToken;

  constructor(
    private http: HttpClient,
    private router: Router
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
        if(response['roles'] && response['roles'][0]){
          localStorage.setItem('currentRole', JSON.stringify(response['roles'][0]));
        }
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
      if(response && response['id']){
        this.router.navigate(['/auth']);
      }
    });

    return response$;
  }

  isLogged(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  isAdmin(): boolean {
    return localStorage.getItem('currentRole') === '"ROL_ADMIN"';
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentRole');
    this.router.navigate(['/auth']);
  }

}
