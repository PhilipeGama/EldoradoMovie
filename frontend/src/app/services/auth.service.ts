import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import IUser from '../model/user.interface';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser = new BehaviorSubject<IUser>(null); 
  hasErrors = new Subject<boolean>();
  errorMessage = new  Subject<string>();

  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  singIn(user) {
    return this.http.post<any>(`${environment.baseApiUrl}/auth`, user).subscribe(_token => {
      window.localStorage.setItem('_token', JSON.stringify(_token));
      this.handleAuthentication(_token);
      this.router.navigate(['']);
    }, error => {
      this.hasErrors.next(true);
      if (error.status === 401) {
        this.errorMessage.next(error.error.title);
      }
    });
  }

  setUser(user: IUser){
    this.currentUser.next(user);
  }

  getUser(): BehaviorSubject<IUser>{
    return this.currentUser;
  }

  autoLogin(){
    const data: any = JSON.parse(window.localStorage.getItem('_token'))

    if(data){
      let tokenDecoded: any = jwt_decode(data.token);
      const expirenIn = (new Date(tokenDecoded.exp * 1000).getTime() - new Date().getTime());
      this.autoLogout(expirenIn)
      this.currentUser.next(tokenDecoded.user);
    }
  }

  logout(){
    this.currentUser.next(null);
    window.localStorage.removeItem('_token')
    this.router.navigate(['/login'])
  }

  autoLogout(expirenIn: number){
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirenIn)
  }

  handleAuthentication(_token: any) {
    let tokenDecoded: any = jwt_decode(_token.token);
    this.currentUser.next(tokenDecoded.user)
    const expirenIn = (new Date(tokenDecoded.exp * 1000).getTime() - new Date().getTime());
    this.autoLogout(expirenIn)
  }

}
