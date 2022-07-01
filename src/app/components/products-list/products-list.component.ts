import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';
import { Product } from 'src/app/product'; //interface
import { productList } from 'src/app/productList';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:any;
  constructor(private _products:ProductsService ,public LoaderService:LoaderService) { 
  }

  ngOnInit(): void {
    this._products.getProducts().subscribe(
      (prod=>{
        // console.log(prod);
        this.products = prod;
        
      }),
      (err=>{
        console.log('error');
        
      })
    )
  }


}
