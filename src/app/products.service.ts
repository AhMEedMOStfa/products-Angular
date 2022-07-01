import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 
  }

  getProducts():Observable <any>
  {
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }
  getProductById(id:number):Observable <any>
  {
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
