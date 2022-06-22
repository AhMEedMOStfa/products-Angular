import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsDetailsComponent } from './components/products-list/products-details/products-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {path:'', redirectTo:'products-list' , pathMatch:'full'},
  {path:'products-list', component:ProductsListComponent},
  {path:'products-list/products-details/:id', component:ProductsDetailsComponent},
  {path:'auth' , loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},










  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
