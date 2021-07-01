import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Product} from '../../app/models/product';

import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Data } from '../models/data';
import { catchError , map , tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private prod: Product[] = [];
  httpOption = {
    header:new HttpHeaders({'Content-Type':'Application/json'})
  };
  apiURL = "https://60a499adfbd48100179dc557.mockapi.io/product";
  constructor(private http:HttpClient) { 
    
  }
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL).pipe() ;
  }
  find(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/${id}`).pipe();
  }
  
  }



