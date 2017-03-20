
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()

export class ProductService {

    constructor(private _http:Http)
    {
        
    }
   
    getProducts(categoryId)
    {
        /*
            This function takes categoryID and returs the products wrapped in observable
        */
        return this._http.get("https://jsonplaceholder.typicode.com/photos?albumId="+categoryId)
        .map(res=>res.json());
        
    }
    
    getProduct(productID)
    {
        /*
            This function takes productID and returs the product wrapped in observable
        */

        return this._http.get("https://jsonplaceholder.typicode.com/photos/"+productID)
        .map(res=>res.json());
        
    }
    
}