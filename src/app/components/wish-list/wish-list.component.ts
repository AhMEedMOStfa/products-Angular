import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeWishList } from '../wishlist Redux/wishlist.actions';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishLists:any[] = [];
  constructor(private _store:Store<{ wishes: any[] }>) { 
    _store.select('wishes').subscribe((res)=>{
      this.wishLists = res;
    })
  

  }


  ngOnInit(): void {
  }
  removeWishItem(i:number)
  {
    this._store.dispatch(removeWishList({i}));
  }



}
