import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogindataService } from 'src/app/services/logindata.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hide_slider : boolean = false

  constructor(private searchService:SearchService,private logindata: LogindataService,private route:Router) { 
   
  }

  ngOnInit(): void {
    if(!this.logindata.IsLoggedIn){
      this.route.navigate(['user-login'])
    }

    this.searchService.searchQuery$.subscribe(data=>{
      if(data != ''){
        this.hide_slider = false
      }else{
        this.hide_slider = true
      }
      
    })
  }

  

}
