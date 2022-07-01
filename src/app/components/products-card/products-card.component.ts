import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CartService } from 'src/app/cart.service';
import { addWishList, removeWishListId } from '../wishlist Redux/wishlist.actions';
// import { Product } from 'src/app/product';
@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {

  @Input() productData:any;
  cartCounter:any;
  btnClicked:boolean=false;
  constructor(private _productCart:CartService ,private _store:Store<{ wishes: object[] }>) { 
   this._productCart.getCounter().subscribe((res)=>{
      this.cartCounter=res;      
    })
  
  }

  ngOnInit(): void {
  }
  addCart(productData:any)
  {
    this._productCart.addCarts(productData);
  }


  addWishList(WishListId:number, image:string ,title:string)
  {
    if(!this.btnClicked)
    {
      this._store.dispatch(addWishList({WishListId,img:image,title})); 
      this.btnClicked=true;
     } 
     else
     {
      this._store.dispatch(removeWishListId({id:WishListId}));
      this.btnClicked=false;
     }
  }
 

}
