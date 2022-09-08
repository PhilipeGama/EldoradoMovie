import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import IUser from '../interfaces/user.interface';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject<IUser>(null); 

  constructor(private http: HttpClient) { }

  singIn(user): Observable<IUser> {
    return this.http.post<IUser>(`${environment.baseApiUrl}/auth`, user);
  }

  setUser(user: IUser){
    this.currentUser.next(user);
  }

  getUser(): BehaviorSubject<IUser>{
    return this.currentUser;
  }

}
