import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import IUser from '../model/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject<IUser>(null); 
  hasErrors = new Subject<boolean>();
  errorMessage = new  Subject<string>();

  constructor(private http: HttpClient, private router: Router) { }

  singIn(user) {
    return this.http.post<IUser>(`${environment.baseApiUrl}/auth`, user).subscribe(user => {
      const token = user.token;

      this.setUser(user);

      window.localStorage.setItem('_token', token);
      this.router.navigate(['']);

    }, error => {
      this.hasErrors.next(true);
      if (error.status === 401) {
        this.errorMessage.next(error.error.data.title);
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
    
  }

  autoLogout(){}

}
