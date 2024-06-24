import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


//display cart
  cartdisplay:boolean = false;

closecart() {
 this.cartdisplay=false
}
showcart() {
  this.cartdisplay = true
}

orignal_total_price:number=10;


count: number = 1;
originalPrice: number = 10; // Initial price
price: number = this.originalPrice; // Current price
total_price:number=this.orignal_total_price;




decreament() {
if(this.count>1){
  this.count--;
   this.updatePrice();
   this.updatetotalprice();
 
}
}

increment() {

this.count++;
this.price *= 10;
this.updatePrice();
this.updatetotalprice();
    
}

updatePrice() {
  // Calculate the price based on the count
  this.price = this.originalPrice + (this.count - 1) * 10;
}

updatetotalprice(){
this.total_price = this.orignal_total_price+(this.count-1)*10;
}


}
