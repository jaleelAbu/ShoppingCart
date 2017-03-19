import { Component,OnInit,OnDestroy } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit,OnDestroy {
  
  
  products
  productSubscription
  currency="AED";
  maxCharactersAllowed = 50;
  idToPriceConverter = 38;
  
  constructor(private _productsService:ProductService,private _router:ActivatedRoute)
  {
     
     
     
  }
   
   
   
   ngOnInit()
   {
     this._router.params.subscribe(params=>{
       var categoryID = params["categoryID"];
       
      if(!categoryID)
      {
          categoryID=1;
        
      }
       this.productSubscription = this._productsService
       .getProducts(categoryID)
       .subscribe(products_json=>{
          this.products=products_json
        });
       
     });
   }
   
   
   fnAddToCart(productID)
   {
     var existingItems = localStorage.getItem('sCartItems');
     if(!existingItems)
     {
          localStorage.setItem('sCartItems',productID);
     }
     else
     {
         localStorage.setItem('sCartItems', existingItems+","+productID);
     }
     
     
     alert("Debug: Item Added to Cart");
     
   }
   
   
   
   ngOnDestroy()
   {
     this.productSubscription.unsubscribe();
   }
    
    
    
}


