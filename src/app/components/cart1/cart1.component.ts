import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/services/cart.service';
import { Card } from 'src/app/models/card';
@Component({
  selector: 'app-cart',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {

  itemCarts: Array<Card> = new Array<Card>();

  constructor(private cart:CartService) {
    var jsonStorage = sessionStorage.getItem('Card');
   }
   number: number = 0;
   sum :number = 0;
   total: number = 0;
   code: number = 0;
  ngOnInit(): void {
    this.itemCarts = this.cart.getItem();
    for(let i=0;i < this.itemCarts.length;i++){
      this.number += this.itemCarts[i].Quantity;
      this.sum += this.itemCarts[i].Quantity * this.itemCarts[i].donGia;
      console.log(this.number,"Tổng số number");
      console.log(this.sum,"Tổng số tiền");
    }  
    this.total = this.sum;
    
    this.itemCarts = this.cart.getItem();
    console.log(this.itemCarts);
  }
  removeall(){
   sessionStorage.removeItem('cart');
   this.itemCarts = [];
  }
  singleDelete(items:any){
    console.log(items);
    if(sessionStorage.getItem('cart')){
    this.itemCarts = JSON.parse(sessionStorage.getItem('cart') ||'[]');
    for(let i=0; 
    i<this.itemCarts.length; 
    i++){
    if
    (this.itemCarts[i].maMH=== items){
    this.itemCarts.splice(i, 1);
    sessionStorage.setItem('cart', JSON.stringify(this.itemCarts));
    }
    }
    }
    }
    minus(item:any){
      var index = this.cart.checkItemProduct(item.maSP,this.itemCarts)
        if(item.Quantity > 0){
          item.Quantity -=1;
          this.number = this.number - 1;
          this.sum = this.number * item.donGia;
          this.total = this.sum;
          var minus = JSON.stringify(this.itemCarts);
          sessionStorage.setItem('cart',minus)
        }
      }
        plus(item:any){
          var index = this.cart.checkItemProduct(item.maSP,this.itemCarts)
            if(item.Quantity > 0){
              item.Quantity +=1;
              this.number +=1;
              this.sum+= item.donGia;
              this.total = this.sum - this.code;
              var plus = JSON.stringify(this.itemCarts);
              sessionStorage.setItem('cart',plus)
            }
          }
    
}
