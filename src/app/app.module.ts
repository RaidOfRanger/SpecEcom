import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

//material
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './Components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './Components/home/home.component';

import { SellerAuthComponent } from './Components/seller-auth/seller-auth.component';
import { SpecHomeComponent } from './Components/spec-home/spec-home.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { SellerLogoutComponent } from './Components/seller-logout/seller-logout.component';
import { AddSellerProductComponent } from './Components/add-seller-product/add-seller-product.component';
import {MatCardModule} from '@angular/material/card';
import { ShowProductComponent } from './Components/show-product/show-product.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { ImageSliderComponent } from './Components/image-slider/image-slider.component';
import { PreSlideDirective } from './Directives/pre-slide.directive';
import { HomeProductComponent } from './Components/home-product/home-product.component';
import { SearchPipe } from './Pipes/search.pipe';
import { CartViewComponent } from './Components/cart-view/cart-view.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SpecHomeComponent,
    UserLoginComponent,
    SellerLogoutComponent,
    AddSellerProductComponent,
    ShowProductComponent,
   
    UpdateProductComponent,
        ImageSliderComponent,
        PreSlideDirective,
        HomeProductComponent,
        SearchPipe,
        CartViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
