import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-men-shop',
  standalone: true,
  imports: [CommonModule,RouterLink,NgFor],
  templateUrl: './men-shop.component.html',
  styleUrl: './men-shop.component.css'
})
export class MenShopComponent implements OnInit {

  

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
