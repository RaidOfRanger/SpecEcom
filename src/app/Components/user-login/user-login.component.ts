import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogindataService } from 'src/app/services/logindata.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  regtolog: boolean = false;
  
  loginform = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required])
  })

  loginform1 = new FormGroup({
    email: new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required])
  })

  constructor(private logindata: LogindataService, private router: Router) { }

  ngOnInit(): void {
    
  }

  OnSubmituserSignup(){
    this.logindata.usersignupsubmit(this.loginform.value)
    .subscribe(
      (result)=>{
        localStorage.setItem('user_login_data',JSON.stringify(result))
        this.logindata.IsLoggedIn.next(true)
        //user homepage will go here
        this.router.navigate(['']);
        console.log("data send")
      },
      err=>{
        console.log("dat not send",err)
      }
    )
    
  }

  switchTouserLogin(){
    this.regtolog =true
    
  }
  switchTouserReg(){
    this.regtolog =false
    
  }

  OnSubmituserLogin(){
    this.logindata.userlogin(this.loginform.value)
    .subscribe(result=>{
        localStorage.setItem('user_login_data',JSON.stringify(result))
        this.logindata.IsLoggedIn.next(true)
        //userlogin page enter here
        this.router.navigate(['']);
        console.log("data send")
    },err=>{
      console.log("enter valid data")
    })
  }
}
