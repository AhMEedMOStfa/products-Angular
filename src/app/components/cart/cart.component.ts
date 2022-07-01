import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  cartCounter:any;
  
  items :Array<any>=[];
  totalPrice:any;
  constructor(private _productCounter:CartService) {
    this._productCounter.getCounter().subscribe((res)=>{
    this.cartCounter = res;
  })
  this._productCounter.getTotalPrice().subscribe((res)=>{
    this.totalPrice = res;
  }) 
  this._productCounter.getCarts().subscribe((res)=>{
    this.items = res; 
  })
  this.totalPrice = this._productCounter.calcTotalPrice(this.items);
}
ngOnInit(): void {
}
  incQuantity(i:number)
  {
    this._productCounter.incrQuantity(i);
  }
  decQuantity(i:number)
  {
    this._productCounter.decrQuantity(i);
  }
  removeItem(i:number)
  {
    this._productCounter.removeProduct(i);
  }

}