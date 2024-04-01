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

  //addproductform: FormGroup ;
  selectedFile: File | null = null;

  AddProductform = new FormGroup({
    Product_name: new FormControl('',[Validators.required]),
    Product_price: new FormControl('',[Validators.required]),
    Product_color: new FormControl('',[Validators.required]),
    img_url: new FormControl('',[Validators.required]),
    Product_category: new FormControl('',[Validators.required]),
    Product_description: new FormControl('',[Validators.required]),
    img: new FormControl('',[Validators.required]),
  })

  constructor(private logindata: LogindataService, private router: Router,private http: HttpClient) {
    // this.addproductform = this.fb.group({
    //   Product_name: ['',Validators.required],
    //   Product_price: ['', Validators.required],
    //   Product_color: ['', Validators.required],
    //   img_url: ['', Validators.required],
    //   Product_category: ['', Validators.required],
    //   Product_description: ['', Validators.required],
    //   img: ['',Validators.required]
    // })
   }

  ngOnInit(): void {
  }

  OnAddProduct(){
    
    console.log("check",this.AddProductform);
    this.logindata.AddProduct(this.AddProductform.value)
    .subscribe(
      (result)=>{
        this.logindata.IsLoggedIn.next(true)
        this.router.navigate(['show-product']);
        console.log("data send")
      },
      err=>{
        console.log("data not send",err)
      }
    )
    
  }

  onFileSelected(event: any) {

    this.selectedFile = event.target.files[0];
    if(this.selectedFile){
      console.log(this.selectedFile);
      const reader = new FileReader()
      reader.readAsDataURL(this.selectedFile)
      reader.onload=(event: any)=>{
        console.log(event.target?.result);
        var r =event.target?.result
        this.AddProductform.patchValue({img: r})
        console.log('checker',this.AddProductform);
        
      }
    }
    
  }


  
}
