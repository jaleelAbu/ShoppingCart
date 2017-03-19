
import { Component,OnInit} from '@angular/core';
import { Location} from '@angular/common';
import {Observable} from 'Rxjs/Rx';
import {ProductService} from '../../product.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  
  cartItems = [];
  currency = "AED";
  idToPriceConverter = 38;
  
  constructor(private _location:Location,private _productsService:ProductService)
  { 
      
  }
  
  ngOnInit()
  {
     this.createProductsFromID(); 
  }
  
  
  
  createProductsFromID()
  {
      if(localStorage.getItem("sCartItems"))
      {
        var cArray = (localStorage.getItem("sCartItems")+"").split(",");
        
        for(var i=0;i<cArray.length;i++)
        {
            var productID = cArray[i];
            this._productsService.getProduct(productID).subscribe(product_json=>{
              product_json.qty=1;
              this.cartItems.push(product_json);
            });
        }
        
        
      }
  }
  
  fnCheckout()
  {
      alert("Checkout Done! Thanks for Purchase.");
       localStorage.setItem("sCartItems","");
      this._location.back();
  }
  
  fnContinueShopping()
  {
      this._location.back();
  }
  
  getTotalPrice()
  {
    var total=0;
      for(var i=0;i<this.cartItems.length;i++)
        {
            var c = this.cartItems[i];
             total += c.id*this.idToPriceConverter*c.qty;
             
        }
        
      return total;
  }
  
  removeFromCart(productID)
  {
      if(localStorage.getItem("sCartItems"))
      {
        var cArray=[];
        cArray = (localStorage.getItem("sCartItems")+"").split(",");
        
        for(var i=0;i<cArray.length;i++)
        {
          if(cArray[i]==productID)
          {
            cArray.splice(i,1);
            localStorage.setItem("sCartItems",cArray.toString());
            
            break;
            
          }
        }
        
        for(var i=0;i<this.cartItems.length;i++)
        {
          if(this.cartItems[i].id==productID)
          {
            this.cartItems.splice(i,1);
           
            break;
            
          }
        }
        
        
      }
  }
    
}


