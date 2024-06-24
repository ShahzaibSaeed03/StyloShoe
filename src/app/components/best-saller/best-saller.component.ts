import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-saller',
  standalone: true,
  imports: [CommonModule, RouterLink
  ],
  templateUrl: './best-saller.component.html',
  styleUrl: './best-saller.component.css'
})
export class BestSallerComponent implements OnInit{

  porductData:any;

  productList:any[]=[];
  productHttpService = inject(ProductService);




  ngOnInit(): void {
    this.productGet()
  }
  productGet() {
      this.productHttpService.getProductMen().subscribe((result:any)=>{
        console.log(result);
        if(result){
          this.productList = result
        }
      })
  }

}
