import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-women-shop',
  standalone: true,
  imports: [CommonModule,RouterLink,NgFor],
  templateUrl: './women-shop.component.html',
  styleUrl: './women-shop.component.css'
})
export class WomenShopComponent {

  

  menProductData:any;
  menProductList:any[]=[];

  productHttpService= inject (ProductService)

  ngOnInit(): void {
      this.MenProductGet()
  }
  MenProductGet() {
    this.productHttpService.getProductMen().subscribe((result:any)=>{
      console.log(result)
      if(result){
        this.menProductList=result;
      }

    })
  }

}
