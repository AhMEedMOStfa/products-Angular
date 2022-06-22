import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductsListComponent } from '../products-list.component';
import { productList } from 'src/app/productList';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  products:Array<Product> = productList;

  productId: any;
  product:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.productId);

    this.product = this.products.find(prod=>{
      return prod.id==this.productId;
    })

    console.log(this.product);
    
  }

}
