import { Component, OnInit } from '@angular/core';
import { LogindataService } from 'src/app/services/logindata.service';



@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  productList: undefined | any[]
  constructor(private product: LogindataService) { }

  ngOnInit(): void {
    this.product.test().subscribe((result: any) => {

      this.productList = result.products

    }, err => {
      console.log(err);

    });
    setInterval(()=>{
      this.productList?.push(this.productList[0])
    this.productList?.shift()
    },4000)
    
  }


  pre() {
    this.productList?.push(this.productList[0])
    this.productList?.shift()
    
   }

   next(){
    this.productList?.unshift(this.productList[this.productList.length-1])
    this.productList?.pop()
   }

}
