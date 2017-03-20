
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
    /*
      >> Fectch product ID from Local Storage
      >> get full information from server with this ID
      >> fill out cartITems array for cart items dislay
    */
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
       
       //Clear out localstorage
       localStorage.setItem("sCartItems","");
       
       //go back to shopping
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
        
        //find the item in cArray >> splice/remove that item >> update the localstorage
        for(var i=0;i<cArray.length;i++)
        {
          if(cArray[i]==productID)
          {
            cArray.splice(i,1);
            localStorage.setItem("sCartItems",cArray.toString());
            
            break;
            
          }
        }
        
        //remove that item from cartItems array too. cartItems array is used in ngFor for dislaying the cart items. 
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


