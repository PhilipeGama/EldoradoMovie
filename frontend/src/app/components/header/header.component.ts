import { animate, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('navbar', [

      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  public currentUser;
  navBarOpen = false;

  role = 'user';
  isLogged = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe(user => {
      if(user){
        this.role = user.role
        this.isLogged = true;
      }
    })
  }

  onLogout(){
    this.auth.logout();
    this.isLogged = false;
  }

  toggleNavbar(){
    this.navBarOpen = !this.navBarOpen;

  }
}
