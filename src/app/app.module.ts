//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//component
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsDetailsComponent } from './components/products-list/products-details/products-details.component';
//custom pipe
import { CustomPipePipe } from './custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsListComponent,
    ProductsCardComponent,
    NotFoundComponent,
    ProductsDetailsComponent,
    CustomPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
