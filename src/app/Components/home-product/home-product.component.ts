import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogindataService } from 'src/app/services/logindata.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  productList: undefined | any[]

  searchtext : string= ''

  cart : any = []

  current_owner :string = ''

  constructor(private product: LogindataService, private route: Router , public searchService: SearchService) { 
    
  }

  ngOnInit(): void {

    
    //this.searchtext = this.search.search
    this.searchService.searchQuery$.subscribe(data=>{
      this.searchtext =data
      
    })

    let data = localStorage.getItem("user_login_data")
    if(data){
        let data1 = JSON.parse(data)
        this.current_owner = data1.email
    }
    
    
    this.product.GetAllProduct().subscribe((result:any)=>{
      
      this.productList =  result
      console.log(result)
      
    },err=>{
      console.log(err);
      
    })
  }


  getGridColumns(): number {
    const screenWidth = window.innerWidth;
    const cardWidth = 200; // Width of each card (adjust as needed)
    const minCols = 1; // Minimum number of columns
    return Math.max(Math.floor(screenWidth / cardWidth), minCols);
  }

  // increase_count(){
  //   this.product_count++;
  // }

  // decrease_count(){
  //   if(this.product_count!=0){
  //     this.product_count--;
  //   }
    
  // }

  addtocart(data:any){
    
    
    if(this.cart?.includes(JSON.parse(data))){
      console.log("cart",this.cart);
    }
    else{

      this.cart?.push(data)
      localStorage.setItem('cart',JSON.stringify(this.cart))
       console.log("cart",this.cart);
    }
    
  }

}
