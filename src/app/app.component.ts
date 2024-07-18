import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LogindataService } from './services/logindata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarfixed:boolean = false;

  header_hide :boolean = false

  constructor(private route:Router, private loginser:LogindataService){

  }

  ngOnInit(){
    if(this.loginser.IsLoggedIn){
      this.header_hide = true
    }
  }
  


}
