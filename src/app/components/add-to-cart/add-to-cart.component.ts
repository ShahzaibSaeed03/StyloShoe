import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import {  RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent implements OnInit {

  productData: any;
  subtotal: number = 0;

  constructor(private productHttpService: ProductService) {}

  ngOnInit(): void {
    this.getCartItem();
  }

  getCartItem(): void {
    this.productHttpService.getfromcart().subscribe((result: any) => {
      console.log(result);
      if (result) {
        this.productData = result;
        this.calculateSubtotal(); // Calculate subtotal when data is received
      }
    });
  }

  calculateSubtotal(): void {
    this.subtotal = 0;
    if (this.productData) {
      this.productData.forEach((item:any) => {
        this.subtotal += item.price
      });
    }
  }

  calculateTotal(): number {
    // Assuming no discounts and shipping costs for simplicity
    return this.subtotal;
  }

  
  
  
  
}