import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  dataAsString = localStorage.getItem('cart');

   dataArray: any[] = [];

   displayedColumns: string[] = ['id', 'title', 'description'];

   dataSource = this.dataArray

  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.dataAsString !== null){
      this.dataArray = JSON.parse(this.dataAsString)
      console.log(this.dataArray);
      
    }
  }

}
