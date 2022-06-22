import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {

  @Input() productData:any;
  constructor() { }

  ngOnInit(): void {
  }


}
