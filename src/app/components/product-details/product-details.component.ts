import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {
 
  productData: any;
  count: number = 1;
  subtotal: number = 0;



  constructor(
    private route: ActivatedRoute, 
    private productDetils: ProductService
  ) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    if(productId){
      this.productDetils.getProductMenById(productId).subscribe((result: any) => {
        console.log(result);
        this.productData = result;
     
    
        // Update the price based on the count
        this.updatePrice();
      });
    }
  }

  updatePrice():void{
    this.subtotal = this.productData.price * this.count;

  }
  

  decrement() {
    if(this.count > 1){
      this.count--;
      this.updatePrice();
    }
  }
  
  increment() {
    this.count++;
    this.updatePrice();
  }
 

  // You can implement addToCart method here if needed

  addcart() {
    // Construct the product object to add to the cart
    let cartItem = {
      productId: this.productData.id, // Assuming id is present in productData
      productName: this.productData.name, // Assuming name is present in productData
      quantity: this.count,
      image:this.productData.image,
      price: this.productData.Price * this.count,
      type:this.productData.Categories,
    };

    // Call the addtocart method from ProductService
    this.productDetils.addtocart(cartItem).subscribe(() => {
      console.log('Product added to cart successfully!');
      // Clear cartList after adding to cart if needed
      // this.cartList = {};
    });
    alert("Product added to cart successfully!");
  }
  
}