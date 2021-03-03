import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { products } from '../products';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link: string;
  numberLike: number;
  numberDislike:number;
  
}
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent{

  constructor() { }

  

  @Input() product: Product;

  share() {
    window.alert('Share?');
  }

}