import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IUser from 'src/app/model/user.interface';
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
  errorMessage;
  public errors = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.auth.singIn(this.user);
    this.auth.hasErrors.subscribe(value => {
      this.hasErrors = value;
    });
    this.auth.errorMessage.subscribe(value => {
      this.errorMessage = value;
    })
  }

  onExit(){}
}
