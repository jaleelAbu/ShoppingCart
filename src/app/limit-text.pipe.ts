import {Pipe,PipeTransform} from "@angular/core";
@Pipe({
    name:"limitText"
    
})

export class LimitTextPipe implements PipeTransform
{
    transform(value: string, maxCharacters: Number)
    {
        if(value)
        {
            if(value.length>maxCharacters)
            {
                return value.substring(0,+maxCharacters)+"...";
            }
            else
            {
                return value;    
            }
            
            
        }
    }
}