import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables, Categories, Post } from 'src/app/app.globals';
import { HomePanelComponent } from '../home-panel/home-panel.component';


@Component({
  selector: 'read-post',
  templateUrl: './read-post.html',
  styleUrls: ['./read-post.css']
})
export class ReadPostComponent {
  post: Post | undefined;
  postDescription: any;
  public PostId: number = 0;


  constructor(private http: HttpClient, private router: Router) {
    this.PostId = HomePanelComponent.idPost;
  }


  ngOnInit() {
    if (!this.PostId) {
      this.router.navigate(['/home-panel']);
    }

    this.getPostById().subscribe((data: Post) => this.post = {
      id: data.id,
      title: data.title,
      description: data.description,
      date: data.date,
      categoryFK: data.categoryFK,
      category: data.category,
    });

    this.getPostById().subscribe((res: Post) => this.postDescription = {
      description: res.description,
    });

  }

  getPostById() {
    return this.http.get<Post>(GlobalVariables.getPostByIdApiUrl + this.PostId);
  }
}
