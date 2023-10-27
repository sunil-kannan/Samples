import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient) {}
  
  public users: any;

  ngOnInit(): void  {
    
    this.users= this.getdata();
   
  }


  getdata(){
    return this.http.get('http://localhost:8080/user').subscribe(
      data=>{
        this.users=data;
        console.log(data) 
      })
  }

  sort(page: Number, keyword: String, field: String, dir: String ){
    return this.http.get('http://localhost:8080/user/this.').subscribe(
      data=>{
        this.users=data;
        console.log(data) 
      })
  }
}
