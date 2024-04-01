import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {LogindataService} from '../../services/logindata.service'
import {Router} from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { AuthGuard } from 'src/app/auth-guard/auth.guard';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  regtolog: boolean = false;
  
  loginform = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    phone_number: new FormControl('',[ Validators.required,Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
    password: new FormControl('',[Validators.required])
  })

  loginform1 = new FormGroup({
    email: new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required])
  })

  constructor(private logindata: LogindataService, private router: Router) { }

  ngOnInit(): void {
    this.logindata.OnRefresh()
  }

  OnSubmit(){
    this.logindata.signupsubmit(this.loginform.value)
    .subscribe(
      (result)=>{
        localStorage.setItem('Seller',JSON.stringify(result))
        this.logindata.IsLoggedIn.next(true)
        this.router.navigate(['show-product']);
        console.log("data send")
      },
      err=>{
        console.log("data not send",err)
      }
    )
  //  this.logindata.loginsubmit(this.loginform.value)
    
  }

  switchToLogin(){
    this.regtolog =true
    
  }
  switchToReg(){
    this.regtolog =false
    
  }

  OnSubmitLogin(){
    this.logindata.login(this.loginform.value)
    .subscribe(result=>{
        localStorage.setItem('Seller',JSON.stringify(result))
        this.logindata.IsLoggedIn.next(true)
        this.router.navigate(['add-product-seller']);
        console.log("data send")
    },err=>{
      console.log("enter valid data")
    })
  }

  

}
