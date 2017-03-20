/*
  Developed by Jaleel Abubaker
  Date: 20 March 2017
*/

import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  
  constructor(private _router:Router)
  {
    
  }
  
  changeCategory($event)
  {
    /*This $event is received from category compnent when a category item is clicked.
      $event.categoryID has the id of the selected category item. 
    */

    this._router.navigate(["product",$event.categoryID]);
  }
  
  
  
}
