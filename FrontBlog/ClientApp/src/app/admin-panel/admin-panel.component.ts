import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GlobalVariables, Post, Posts } from 'src/app/app.globals';
import { LoginService } from 'src/app/app.functions';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.html',
  styleUrls: ['../../admin-panel-and-home-panel.css']
})

export class AdminPanelComponent implements OnInit {

  public posts: Posts[] = [];
  public static idPost: number = 0;
  public status: any;
  public errorMessage: any;

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) {
    http.get<Posts[]>(GlobalVariables.getAllPostsWithCategorieAndDateApiUrl).subscribe(data => { this.posts = data; }, error => console.log(error));
  }

  ngOnInit() {
    this.loginService.checkIfUserIsLoggedIn();
  }

  onClickSubmit(data: { category: string }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    var categoryObj = {
      "name": data.category,
    }

    if (categoryObj.name == '') {
      alert('You must fill in the category field')
    } else {
      this.http.post(GlobalVariables.registerCategoryApiUrl, categoryObj, { headers: headers }).subscribe(res => { alert("Category " + data.category + "Registered") });   
    } 
  }

  sendIdToApi(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    AdminPanelComponent.idPost = value;
  }

  deletePost(event: {target: any;}) {
    var target = event.target;
    var valueAttr = target.attributes.value;
    var valueButton = valueAttr.nodeValue;

    this.http.delete(GlobalVariables.deletePostByIdApiUrl + valueButton)
      .subscribe({
        next: data => {
          this.status = 'Delete successful';
          alert(this.status);
          window.location.reload();
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      });

      
  }
}


