import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Categories, GlobalVariables } from 'src/app/app.globals';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private router: Router, private http: HttpClient) { }

  checkIfUserIsLoggedIn() {
    var session = sessionStorage.getItem('logged');
    if (session != 'true') {
      alert("You need to Log in to use this page!");
      this.router.navigate(['/login-page']);
    }
  }
}


