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
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, NavbarComponent, UserComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
