import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }



  addtocart(product: any): Observable<any> {
    return this.http.post("http://localhost:3000/cart", product);
  }


  // clearCart(): Observable<any> {
  //   return this.http.delete("http://localhost:3000/cart");
  // }


  
  getfromcart(){
    return this.http.get("http://localhost:3000/cart")
  }
  
  getProduct(){
    return this.http.get("http://localhost:3000/Best-Saller")
  }

  getProductMen(){
    return this.http.get("http://localhost:3000/Mens")
  }

  getProductMenById(id:string){
    return this.http.get(`http://localhost:3000/Mens/${id}`)
  }

}
