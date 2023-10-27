import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { usermodel } from '../Model/usermodel';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  //@ts-ignore
  user: usermodel = new usermodel();

 
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void  {
    
  
   
  }

  sign_up() {
    console.log(this.user)
    this.http.post<any>("http://localhost:8080/register/save", this.user).subscribe(res => {
      alert("registered Succesful")
    })
  }

 
  login() {
   this.router.navigate(['./']);
  }
}
