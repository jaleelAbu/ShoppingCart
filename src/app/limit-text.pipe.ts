import {Pipe,PipeTransform} from "@angular/core";
@Pipe({
    name:"limitText"
    
})

export class LimitTextPipe implements PipeTransform
{
    transform(value: string, maxWords: Number)
    {
        if(value)
        {
            if(value.length>maxWords)
            {
                return value.substring(0,+maxWords)+"...";
            }
            else
            {
                return value;    
            }
            
            
        }
    }
}