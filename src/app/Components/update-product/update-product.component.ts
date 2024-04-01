import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LogindataService } from 'src/app/services/logindata.service';
import { ShowProductComponent } from '../show-product/show-product.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  selectedFile: File | null = null;

  UpdateProductform = new FormGroup({
    id: new FormControl(''),
    Product_name: new FormControl('',[Validators.required]),
    Product_price: new FormControl('',[Validators.required]),
    Product_color: new FormControl('',[Validators.required]),
    img_url: new FormControl('',[Validators.required]),
    Product_category: new FormControl('',[Validators.required]),
    Product_description: new FormControl('',[Validators.required]),
    img: new FormControl('',[Validators.required]),
  })
  constructor(private route: ActivatedRoute,private logindata: LogindataService, private router: Router) { }

  ngOnInit(): void {
    let productid = this.route.snapshot.paramMap.get('id')
    console.log(productid);
    this.logindata.getDataByid(productid).subscribe((result:any)=>{
      this.UpdateProductform.patchValue(result)
      console.log("data to update",this.UpdateProductform.value);
    },(err)=>{
      console.log('err',err);
      
    })
  }

  OnUpdateProduct(){
    console.log("chk");
    this.logindata.updateData(this.UpdateProductform.value).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['show-product'])
    },(err)=>{
      console.log(err);
      
    })
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
        this.UpdateProductform.patchValue({img: r})
        console.log('checker',this.UpdateProductform);
        
      }
    }
    
  }
}
