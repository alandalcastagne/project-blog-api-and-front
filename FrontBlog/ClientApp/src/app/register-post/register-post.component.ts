import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalVariables, Categories } from 'src/app/app.globals';
import { LoginService } from 'src/app/app.functions';
import { Router } from '@angular/router';
import { empty } from 'rxjs';


@Component({
  selector: 'register-post',
  templateUrl: './register-post.html',
  styleUrls: ['./register-post.css']
})

export class RegisterPostComponent {
   public categories: Categories[] = [];

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {
    http.get<Categories[]>(GlobalVariables.getAllCategoriesApiUrl).subscribe(data => { this.categories = data; }, error => console.log(error));
  }

  ngOnInit() {
    this.loginService.checkIfUserIsLoggedIn();
  }

  onClickSubmit(data: { title: string, description: string, categoryFK: number }) {
    const now = new Date();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    var postObj = {
      "title": data.title,
      "description": data.description,
      "date": now.toLocaleDateString(),
      "categoryFK": data.categoryFK
    }

    console.log(postObj.categoryFK);

    if (postObj.title == '' || postObj.description == '' || postObj.categoryFK == null) {
      alert('All fields must be filled')
    } else {
      this.http.post(GlobalVariables.registerPostApiUrl, postObj, { headers: headers }).subscribe(res => { alert("Post " + data.title + " Registered!") });
    }
 
  }
}
