import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

import { AuthGuard } from './auth-guard/auth.guard';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AddSellerProductComponent } from './Components/add-seller-product/add-seller-product.component';
import { ShowProductComponent } from './Components/show-product/show-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { CartViewComponent } from './Components/cart-view/cart-view.component';


const routes: Routes = [
  {path:'', component:HomeComponent,canActivate:[AuthGuard]},
  
  // {path:'Seller-auth', component:SellerAuthComponent},
  {path:'user-login', component: UserLoginComponent},
  {path:'add-product-seller',component: AddSellerProductComponent,canActivate:[AuthGuard]},
  {path:'my-product',component:ShowProductComponent,canActivate:[AuthGuard]},
  {path:'update-seller-product/:id', component: UpdateProductComponent,canActivate:[AuthGuard]},
  {path:'cart', component: CartViewComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
