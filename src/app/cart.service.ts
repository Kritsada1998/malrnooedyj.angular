

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  } //เพิ่มสินค้า

  getItems() {
    return this.items;
  } //แสดงสินค้า

  clearCart() {
    this.items = [];
    return this.items;
  } //ลบสินค้า

getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  
}
