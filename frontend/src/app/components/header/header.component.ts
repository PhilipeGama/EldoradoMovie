import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import IUser from 'src/app/interfaces/user.interface';
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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe(user => {
      if(user){
        this.role = user.role
      }
    })
  }

  onLogout(){
    console.log('logout...')
  }

  toggleNavbar(){
    this.navBarOpen = !this.navBarOpen;

  }
}
