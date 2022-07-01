import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductsListComponent } from '../products-list.component';
import { productList } from 'src/app/productList';
import { ProductsService } from 'src/app/products.service';
import { CartService } from 'src/app/cart.service';
import { LoaderService } from 'src/app/loader.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {


  productId: any;
  product:any;
  constructor(private activatedRoute:ActivatedRoute ,private _product:ProductsService , private __productCounter:CartService,public LoaderService:LoaderService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this._product.getProductById(this.productId).subscribe(
      ((prod:any)=>{
        console.log(this.productId);
        console.log(prod);
        this.product = prod;
      })
    )  
  }
  addCart()
  {
    this.__productCounter.addCarts(this.product);
  }

}
