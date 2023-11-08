import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RegisterPostComponent } from './register-post/register-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomePanelComponent } from './home-panel/home-panel.component';
import { ReadPostComponent } from './read-post/read-post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginPageComponent,
    AdminPanelComponent,
    RegisterPostComponent,
    EditPostComponent,
    HomePanelComponent,
    ReadPostComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginPageComponent, pathMatch: 'full' },
      { path: 'login-page', component: LoginPageComponent },
      { path: 'admin-panel', component: AdminPanelComponent },
      { path: 'register-post', component: RegisterPostComponent },
      { path: 'edit-post', component: EditPostComponent },
      { path: 'home-panel', component: HomePanelComponent },
      { path: 'read-post', component: ReadPostComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
