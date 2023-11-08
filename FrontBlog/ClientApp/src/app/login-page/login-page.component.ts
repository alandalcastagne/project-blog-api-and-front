import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { baseApiUrls } from 'src/app/app.globals';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPageComponent {

  constructor(private http: HttpClient, private router: Router) { }

  dataSave(message: object) {
    sessionStorage.setItem('logged', 'true');
    alert('Welcome! ' + message)
    this.router.navigate(['/admin-panel']);
  }

  async onClickSubmit(data: { login: string, password: string }) {
    if (data.login == '' || data.password == '') {
      alert('The login and password field must be filled in');
    } else {
      let loginUrl: string = baseApiUrls.baseApiurlUser + data.login + '/' + data.password;
      await this.http.get(loginUrl).subscribe(data => this.dataSave(data), (error => alert('User not found')));
    }    
  } 
}
