import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  IsLoggedIn = new BehaviorSubject<boolean>(false)

  url = 'http://localhost:3000/spec/'
  constructor(private http: HttpClient, private router: Router) { }


  OnRefresh() {
    this.router.navigate(['add-product-seller'])
  }

 
//done
  usersignupsubmit(data: any) {
    console.log(data)
    return this.http.post(this.url+"register", data)
  }
  //done

  userlogin(data:any){
    return this.http.post(this.url+"login",data,{responseType:'text'})
  }
//done
  AddProduct(data: any){
    return this.http.post(this.url+"add_product",data)
  }
//done
  GetAllProduct(){
    return this.http.get(this.url+"fetch_product")
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
