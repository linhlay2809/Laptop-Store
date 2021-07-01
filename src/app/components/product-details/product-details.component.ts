import { Component, OnInit , Input} from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Data } from '../../models/data';
import { Product } from 'src/app/models/product';
import {ActivatedRoute} from '@angular/router';
import { CartService} from '../../services/cart.service';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  proCartItem: any = null;
  products: Array<Product> = new Array<Product>();
  data:Product[]=[];
  Quantitys: any = 0;
  a = 0;
  product = new Product;
  constructor(private route:ActivatedRoute,private productService:SubjectService,private cart1:CartService) {
    var jsonStorage = sessionStorage.getItem('Card');
    if(jsonStorage !=null){
      this.proCartItem = JSON.parse(jsonStorage);
    }
  }
  

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);  
    parseInt(this.Quantitys);
     }
     getRoute(id:any){
      this.productService.find(id).subscribe((res:any)=>{
        this.product = res;
      });    
      
      this.proCartItem = JSON.parse(sessionStorage.getItem('cart') || '[]');
    }
    addCart(items:Product){

      var index = this.cart1.checkItemProduct(items.maMH,this.proCartItem)
      if(index == -1){
        var newItem ={
          maMH: items.maMH,
          ten: items.ten,
          hinhanh: items.hinhanh,
          donGia: items.donGia ,
          moTa: items.moTa,
          Quantity: 1
        }      
        this.proCartItem.push(newItem);
      }else{ 
        this.proCartItem[index].Quantity +=1;
      }
      var jsonString = JSON.stringify(this.proCartItem);
      sessionStorage.setItem('cart',jsonString);
    }
    getAll2(){
      this.productService.getAll().subscribe((dat:any)=>{
        console.log(dat);
        this.data = dat;
      });
    }
  }
  

