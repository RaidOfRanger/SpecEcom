import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LogindataService } from 'src/app/services/logindata.service';


@Component({
  selector: 'app-add-seller-product',
  templateUrl: './add-seller-product.component.html',
  styleUrls: ['./add-seller-product.component.css']
})
export class AddSellerProductComponent implements OnInit {


  data1:any

  AddProductform = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    discountPercentage: new FormControl('',[Validators.required]),
    rating: new FormControl('',[Validators.required]),
    stock: new FormControl('',[Validators.required]),
    brand: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    thumbnail: new FormControl('',[Validators.required]),
    images: new FormControl(''),
    owner: new FormControl(''),
  })

  constructor(private logindata: LogindataService, private router: Router,private http: HttpClient) {

   }

  ngOnInit(): void {
    let data = localStorage.getItem("user_login_data")
    if(data){
         this.data1 = JSON.parse(data)
         console.log(this.data1);     
        
    }

  }

  OnAddProduct(){

    this.AddProductform.value.owner = this.data1.email
    this.logindata.AddProduct(this.AddProductform.value)
    .subscribe(
      (result)=>{
        this.logindata.IsLoggedIn.next(true)
        this.router.navigate(['my-product']);
        console.log("data send")
      },
      err=>{
        console.log("data not send",err)
      }
    )
    
  }

  // onFileSelected(event: any) {

  //   this.selectedFile = event.target.files[0];
  //   if(this.selectedFile){
  //     console.log(this.selectedFile);
  //     const reader = new FileReader()
  //     reader.readAsDataURL(this.selectedFile)
  //     reader.onload=(event: any)=>{
  //       console.log(event.target?.result);
  //       var r =event.target?.result
  //       this.AddProductform.patchValue({img: r})
  //       console.log('checker',this.AddProductform);
        
  //     }
  //   }
    
  // }


  
}
