import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signin',component:SigninComponent },
  {path: "", component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
