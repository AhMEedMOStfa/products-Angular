import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  counter=0;
  totalProductsPrice = 0;
  filtereditemArray:Array<any>=[];
  cartCounter = new BehaviorSubject(this.counter);
  AllPrice = new BehaviorSubject(this.totalProductsPrice);
  itemsArray=new BehaviorSubject(this.filtereditemArray);

  constructor() { }

  incCounter()
  {
    this.counter++;
    this.cartCounter.next(this.counter);
  }
  decCounter()
  {
    this.counter--;
    this.cartCounter.next(this.counter);
  }
  getCounter()
  {
    return this.cartCounter.asObservable();
  }
  addCarts(itemDetail:any)
  {
   let removeRepeated=this.filtereditemArray.find((prod)=>{
    // console.log(prod.id, itemDetail.id)
      return prod.id == itemDetail.id;
    })
    if(!removeRepeated){
    // console.log(itemDetail);
    let obj ={id : itemDetail.id,
               quantity: 1,
               totalPrice:itemDetail.price,
               image : itemDetail.images[0] ,
              title:itemDetail.title,
              price:itemDetail.price}

            //  totalPrice:itemDetail.price,

              

    this.filtereditemArray.push(obj)
    }
    else
    {
      removeRepeated.quantity++;
      removeRepeated.totalPrice= removeRepeated.price +  removeRepeated.totalPrice;
      // removeRepeated.totalPrice= removeRepeated.price *  removeRepeated.quantity;
    }
    this.itemsArray.next(this.filtereditemArray);
    this.incCounter();
  }
  incrQuantity(i:number)
  {
    this.filtereditemArray[i].quantity++;
    this.calcItemPrice(i);
    this.incCounter();
  }
  decrQuantity(i:number)
  {
    this.filtereditemArray[i].quantity--;
    this.decCounter();
    this.calcItemPrice(i);
    if(!this.filtereditemArray[i].quantity)
    {
      this.removeProduct(i);
    }
  }
  removeProduct(i:number)
  {
    this.counter = this.counter - this.filtereditemArray[i].quantity;
    this.cartCounter.next(this.counter);
    this.filtereditemArray.splice(i,1);
  }
  calcItemPrice(i:number)
  {
    this.filtereditemArray[i].totalPrice = this.filtereditemArray[i].price * this.filtereditemArray[i].quantity;
    // console.log(this.filtereditemArray[i].totalPrice);
  }
  getCarts()
  {
    return this.itemsArray.asObservable();
  }

  calcTotalPrice(productsArray:Array<any>):number
  {
    productsArray.forEach((prod)=>{
      this.totalProductsPrice+=prod.totalPrice;
    })
    this.AllPrice.next(this.totalProductsPrice);
    return this.totalProductsPrice;
  }
  getTotalPrice()
  {
    return this.AllPrice.asObservable()
  }
}

