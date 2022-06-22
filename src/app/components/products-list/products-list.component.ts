import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product'; //interface
import { productList } from 'src/app/productList';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:Array<Product> = productList;
  constructor() { 
    
  }

  ngOnInit(): void {
  }


}
