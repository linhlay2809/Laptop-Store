import { Component, OnInit } from '@angular/core';
import { Data} from '../../models/data';
import { SubjectService } from '../../services/subject.service';
import { CartService} from '../../services/cart.service';
import { Product } from 'src/app/models/product';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Product[]=[];
  constructor(private pros:SubjectService) { }

  ngOnInit(): void {
    this.getAll2();
  }
  getAll2(){
    this.pros.getAll().subscribe((dat:any)=>{
      console.log(dat);
      this.data = dat;
    });
  }
}