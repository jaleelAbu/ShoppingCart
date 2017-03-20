
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CategoryService {

    constructor(private _http:Http)
    {
        
    }
   
   /* This function returs the catgegories wrapped in observable */
    getCategories()
    {
        return this._http.get("https://jsonplaceholder.typicode.com/photos")
        .map(categories=>categories.json());
        
    }
    
}