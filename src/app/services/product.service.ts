import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get('')
  }
  getbyid(id:number){
    return this.http.get('')
  }
  add(data:Product){
    return this.http.post('',data)
  }
  update(id:number,data:Product){
    return this.http.patch('',data)
  }
}
