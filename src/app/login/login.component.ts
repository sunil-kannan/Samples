import { Component, OnInit }

  from '@angular/core';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { usermodel } from '../Model/usermodel';
import { loginmodel } from '../Model/loginmodel';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
  //@ts-ignore
  userLogin: loginmodel = new loginmodel();


  constructor( private router: Router, private http: HttpClient) {}

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  loginSuccess = false;

//"Error": "Required part 'certifiedImages' is not present."
//"Error": "Required part 'video' is not present."
  ngOnInit() {

    $("document").ready(function () {
      //Password eye
      $("#eye").click(function () {
        if ($(this).hasClass('fa-eye-slash')) {
          $(this).removeClass('fa-eye-slash');
          $(this).addClass('fa-eye');
          $('#password').attr('type', 'text');
        } else {
          $(this).removeClass('fa-eye');
          $(this).addClass('fa-eye-slash');
          $('#password').attr('type', 'password');
        }
      })
    })
  }

  // login() {
  //   console.log(this.userLogin)
  //    this.http.post<any>("http://localhost:8080/logins", this.userLogin).subscribe(res => {
  //      alert("Sigin Succesful")
  //    })
  // }

  signup() {
    this.router.navigate(['./signin']);
  }

}
