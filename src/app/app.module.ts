import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import * as $ from 'jquery';
import { Sidenav } from 'materialize-css';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, NavbarComponent, UserComponent, PostsComponent, PostFormComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, SweetAlert2Module.forRoot()],
  providers: [UsersService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
