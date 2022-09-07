import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IUser from 'src/app/interfaces/user.interface';
import User from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: IUser = {
    email: '',
    role: '',
    password: '',
    token: '',
  };

  public hasErrors;
  public errors = [];


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.singIn
    (this.user).subscribe(user => {
      const token = user.token;

      this.authService.setUser(user);

      window.localStorage.setItem('_token', token);
      this.router.navigate(['']);

    }, error => {
      this.hasErrors = true;

      if (error.status === 401) {
        this.errors.push(error.error.data.title);
      }
      for (const err of error.error.message) {
        this.errors.push(err.message);
      }
    });
  }

  onExit(){
    
  }
}
