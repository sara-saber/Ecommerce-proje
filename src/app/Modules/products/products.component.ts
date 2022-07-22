import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private s:ProductService) { }
  p=new Product();

  ngOnInit(): void {
    this.f();
  }

  getProducts(){
    this.s.getAll().subscribe(x=>this.p)
  }
  f(){
    alert('product')
    }
}
