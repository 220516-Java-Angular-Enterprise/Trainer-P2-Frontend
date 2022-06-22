import { Component, OnInit } from '@angular/core';
import { AuthModule, AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService) { }

  loggedIn: boolean = false;

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isLoggedIn => {
      this.loggedIn = isLoggedIn;
    })
  }

  logIn(): void {
    this.auth.loginWithRedirect();
  }

  logOut(): void {
    this.auth.logout();
  }

}
