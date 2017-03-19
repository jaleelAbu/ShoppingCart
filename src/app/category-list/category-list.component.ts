
import { Component,Output,EventEmitter,OnInit,OnDestroy } from '@angular/core';
import {CategoryService} from "../category.service";


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})


export class CategoryListComponent implements OnInit,OnDestroy {
    
    @Output() myEvent = new EventEmitter();
    categories=[];
    selectedCategoryID;
     
     
    constructor(private _categoryService:CategoryService)
    {
         
    }
    
    
  
    
    
    categorySelected(selectedCategoryID)
    {
       this.selectedCategoryID = selectedCategoryID;
        this.myEvent.emit({categoryID:selectedCategoryID});
        
    }
    
    
    
    
   ngOnInit()
   {
       var pushID = 1;
       this._categoryService.getCategories().subscribe(category_json=>{
            
           var prevCategoryID:Number=-1,newCategoryID:Number;
            category_json.forEach((item, index) => {

           newCategoryID = item.albumId;
           
           if(newCategoryID!=prevCategoryID)
           {
                this.categories.push({id:pushID,name:"Category "+pushID++});
           }
           
           prevCategoryID = newCategoryID;
            
        });
            
        });
        
   }
   
   ngOnDestroy()
   {
       
   }
    
    
    
}