import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cartCounter:number=0;
  constructor(private _counterCart:CartService, public LoaderService:LoaderService) {
   this._counterCart.getCounter().subscribe((res)=>{
      // console.log(res);
      this.cartCounter=res;
    })
   }

  ngOnInit(): void {
  }

}
