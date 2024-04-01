import { Component, OnInit } from '@angular/core';
import { LogindataService } from 'src/app/services/logindata.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  productList: undefined | any[]

  mover: boolean = false

  constructor(private product: LogindataService, private route: Router) { }

  ngOnInit(): void {
     this.product.test().subscribe((result:any)=>{
      
      this.productList =  result.products
      
    },err=>{
      console.log(err);
      
    })
  }

  editcard(id : any){
    console.log('edit data', id)
    this.route.navigate([''])
  }

  deletecard(id : any){
    console.log('delete',id);
    this.product.deleteProduct(id).subscribe((result)=>{
      this.ngOnInit()
      console.log(result);
    },(err)=>{
      console.log(err);
    })
    
  }

  getGridColumns(): number {
    const screenWidth = window.innerWidth;
    const cardWidth = 300; // Width of each card (adjust as needed)
    const minCols = 6; // Minimum number of columns
    return Math.max(Math.floor(screenWidth / cardWidth), minCols);
  }

  data(){
    console.log('data');
    
  }
}
