import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Location} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CartComponent } from './cart/cart.component';
import {ProductService} from "../product.service";


@NgModule({
    
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        CartComponent
    ],
    exports:[CartComponent],
    providers:[Location,ProductService]
    
    
})

export class CartModule{}
