import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsDetailsComponent } from './components/products-list/products-details/products-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'', redirectTo:'products-list' , pathMatch:'full'},
  {path:'products-list', component:ProductsListComponent, canActivate:[LoginGuard]},
  {path:'cart' , component:CartComponent,canActivate:[LoginGuard]},
  {path:'products-list/products-details/:id', component:ProductsDetailsComponent,canActivate:[LoginGuard]},
  {path:'wish-list',component:WishListComponent , canActivate:[LoginGuard]},
  {path:'auth' , loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},










  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
