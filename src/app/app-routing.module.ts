import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Cart1Component} from './components/cart1/cart1.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
;

const routes: Routes = [
  {path:'cart',component:Cart1Component},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},

 
      
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
