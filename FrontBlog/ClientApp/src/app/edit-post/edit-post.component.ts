import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { GlobalVariables, Categories, Post } from 'src/app/app.globals';
import { LoginService } from 'src/app/app.functions';
import { Router } from "@angular/router";


@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.html',
  styleUrls: ['./edit-post.css']
})

export class EditPostComponent {

  post: Post | undefined;
  public categories: Categories[] = [];
  public PostId: number = 0;
  putObj: any;

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {
    http.get<Categories[]>(GlobalVariables.getAllCategoriesApiUrl).subscribe(data => { this.categories = data; }, error => console.log(error));
    this.PostId = AdminPanelComponent.idPost;
  }

  ngOnInit() {
    if (!this.PostId) {
      this.router.navigate(['/admin-panel']);
    }

    this.loginService.checkIfUserIsLoggedIn();

    this.getPostById().subscribe((data: Post) => this.post = {
      id: data.id,
      title: data.title,
      description: data.description,
      date: data.date,
      categoryFK: data.categoryFK,
      category: data.category,
    });

    this.getPostById().subscribe((res: Post) => this.putObj = {
      id: res.id,
      title: res.title,
      description: res.description,
      date: res.date,
      categoryFK: res.categoryFK,
      category: res.category,
    });
  }

  getPostById() {
    return this.http.get<Post>(GlobalVariables.getPostByIdApiUrl + this.PostId);
  }

  onClickSubmit(data: { title: string, description: string, categoryFK: number }) {
    const now = new Date();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    if (data.title == '' && data.description != '') {
      this.putObj.description = data.description;
    } else if (data.title != '' && data.description == '') {
      this.putObj.title = data.title;
    } else if (data.title != '' && data.description != '') {
      this.putObj.title = data.title;
      this.putObj.description = data.description;
    }


    this.putObj.date = now.toLocaleDateString()

    this.http.put(GlobalVariables.editPostByIdApiUrl + this.PostId, this.putObj, { headers: headers }).subscribe(res =>
    {
      alert("Post " + this.post?.title + "Edited!"),
     this.router.navigate(['/admin-panel'])
    })
  }
}

