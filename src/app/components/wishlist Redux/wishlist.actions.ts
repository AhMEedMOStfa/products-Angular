import { createAction ,props } from '@ngrx/store';
import { WishList } from './wishList.model';


export const addWishList = createAction(
    '[Add WishList] Add WishList',
    props<{WishListId:number , img:string , title:string }>()
  );
export const removeWishList = createAction(
    '[Remove WishList] Remove WishList',
    props<{ i:number}>()
  );
export const removeWishListId = createAction(
    '[Remove WishListId] Remove WishListId',
    props<{ id:number}>()
  );