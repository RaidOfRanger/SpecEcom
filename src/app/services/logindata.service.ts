import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  IsLoggedIn = new BehaviorSubject<boolean>(false)

  url = 'http://localhost:3000/'
  constructor(private http: HttpClient, private router: Router) { }

  signupsubmit(data: any) {
    console.log(data)
    return this.http.post(this.url+'seller', data)
  }
  OnRefresh() {
    this.router.navigate(['add-product-seller'])
  }

  login(data:any){
    return this.http.get(this.url+"?email="+data.email+"&passowrd="+data.password)
  }

  usersignupsubmit(data: any) {
    console.log(data)
    return this.http.post(this.url+"user_login_data", data)
  }

  userlogin(data:any){
    return this.http.get(this.url+"user_login_data?email="+data.email+"&passowrd="+data.password)
  }

  AddProduct(data: any){
    return this.http.post(this.url+"Product_Data",data)
  }

  GetAllProduct(){
    return this.http.get(this.url+"Product_Data")
  }

  //image upload
  updateData(data: any){
    
    return this.http.patch(this.url+"Product_Data/"+data.id,data)
  }

  getDataByid(id: any){
    return this.http.get(this.url+"Product_Data/" + id)
  }

  deleteProduct(id: any){
    return this.http.delete(this.url+"Product_Data/"+id)
  }

  test(): Observable<any>{
    return  this.http.get('https://dummyjson.com/products')
  }

}
