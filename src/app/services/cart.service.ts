import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Product} from '../../app/models/product';
import { Card } from '../models/card';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  checkItemProduct(mamh: any,maMHPro: any):any{
    for(let i =0;i < maMHPro.length ;i++){
      if(maMHPro[i].maMH == mamh){
        return i;
        
      }
    }
    
    return -1;
  }
  getItem():Array<Card>{
    var jsonStorage = sessionStorage.getItem('cart');
    if(jsonStorage){
      return JSON.parse(jsonStorage)
    }
    return new Array<Card>();
  }
}
