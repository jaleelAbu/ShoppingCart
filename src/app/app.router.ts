import {Router,RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart/cart.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routing = RouterModule.forRoot([
    {path:"",component:ProductListComponent},
    {path:"cart",component:CartComponent},
    {path:"product",component:ProductListComponent},
    {path:"product/:categoryID",component:ProductListComponent},
    {path:"**",component:NotFoundComponent}
    
    
    
]) 