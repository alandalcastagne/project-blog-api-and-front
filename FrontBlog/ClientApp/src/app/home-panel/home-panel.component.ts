import { Component } from '@angular/core';
import { GlobalVariables, Categories, Posts } from 'src/app/app.globals';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'home-panel',
  templateUrl: './home-panel.html',
  styleUrls: ['../../admin-panel-and-home-panel.css']
})

export class HomePanelComponent {
  public categories: Categories[] = []
  public posts: Posts[] = [];
  public static idPost: number = 0;

  constructor(private http: HttpClient) {
    http.get<Categories[]>(GlobalVariables.getAllCategoriesApiUrl).subscribe(data => { this.categories = data; }, error => console.log(error));
  }

  onClickSubmit(data: { categoryFK: any }) {
    this.http.get<Posts[]>(GlobalVariables.getAllPostsByCategorie + data.categoryFK).subscribe(res =>
    {
    this.posts = res; if (!this.posts[0]) { alert('There are no posts in this category') }
    },
    error => console.log(error));
  }

  sendIdToApi(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    HomePanelComponent.idPost = value;
  }
}
