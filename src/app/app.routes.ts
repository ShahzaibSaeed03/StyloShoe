import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenShopComponent } from './components/men-shop/men-shop.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WomenShopComponent } from './components/women-shop/women-shop.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"cart",
        component:AddToCartComponent
    }
    ,
    // {
    //     path:"cart/:id",
    //     component:AddToCartComponent
    // },
    {
        path:"header",
        component:HeaderComponent
    },
    {
        path:"men-shop",
        component:MenShopComponent
    },
    {
       path:"women-shop",
       component:WomenShopComponent 
    },
    {
        path: 'details/:id',
        component: ProductDetailsComponent,
       
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path:'about-us',
        component:AboutUsComponent
      }
   
];
