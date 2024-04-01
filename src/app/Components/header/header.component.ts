import { Component, HostListener, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LogindataService } from 'src/app/services/logindata.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menutype:string = 'default'
  barfixed:boolean = false
  searchtext :string = ''

  @HostListener('window.scroll',['$event']) onscroll(){
    if(window.scrollY > 100){
      this.barfixed = true
    }else{
      this.barfixed = false
    }
  }


  constructor(private router: Router, private loginservice: LogindataService,private searchService: SearchService ) {
  }



  ngOnInit(): void {
    
    this.router.events.subscribe((val:any)=>{
      // console.log("jj",val.url.includes('auth'));
      
      if(val.url){
        console.log("jj",val.url);
        if(localStorage.getItem('Seller') ){
          this.menutype = "seller"
        } 
        if(val.url.includes('spec') ){
          this.menutype = "seller"
        }
        if(val.url == "/spec-home" || val.url == "/add-product-seller"){
          this.menutype = "seller"
        }else{
          this.menutype = "default"
        }
      }
    })
  }

  seller_logout(){
    localStorage.removeItem('Seller')
    this.router.navigate([''])
  }
  
  searchtra(){
    this.searchService.setSearchQuery(this.searchtext);
    
  }

}
