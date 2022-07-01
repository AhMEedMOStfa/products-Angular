//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//component
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsDetailsComponent } from './components/products-list/products-details/products-details.component';
import { CartComponent } from './components/cart/cart.component';
//custom pipe
import { CustomPipePipe } from './custom-pipe.pipe';
//services
import { LoginGuard } from './login.guard';
import { StoreModule } from '@ngrx/store';
//reducer
import { collectionReducer } from './components/wishlist Redux/wishList.reducer';
import { WishListComponent } from './components/wish-list/wish-list.component';
// import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsListComponent,
    ProductsCardComponent,
    NotFoundComponent,
    ProductsDetailsComponent,
    CustomPipePipe,
    CartComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({wishes:collectionReducer})
    ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
