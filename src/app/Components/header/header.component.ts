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
      
        
        if(val.url == "/my-product" || val.url == "/add-product-seller" || val.url == "/user-login" ){
          this.menutype = "seller"
        }else{
          this.menutype = "default"
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('user_login_data')
    this.router.navigate(['user-login'])
    this.loginservice.IsLoggedIn.next(false)
  }
  
  searchtra(){
    this.searchService.setSearchQuery(this.searchtext);
    
  }

}
