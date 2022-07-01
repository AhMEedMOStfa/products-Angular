import {createReducer , on} from '@ngrx/store';
import { addWishList, removeWishList, removeWishListId } from './wishlist.actions';
import { WishList } from './wishList.model';

export const initialState:Array<object> = [];
export const collectionReducer = createReducer(
    initialState, 
    on(addWishList , (state , { WishListId , title , img})=>{        
      state = [...state , {WishListId , title , img}];
      // console.log(state);
      return state;
    }),

    on(removeWishList , (state , {i})=>{
        state = [...state];
        state.splice(i , 1);
        return state;
    }),
    on(removeWishListId , (state , {id})=>{
        state = [...state];
       let index = state.findIndex((prod:any)=>{
          console.log(id,prod.WishListId);
          
          return id == prod.WishListId;
        });
        console.log(index);
        
        if(index!= -1)
        {
          state.splice(index,1);
        }

        return state;
    }),

);