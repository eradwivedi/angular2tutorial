import { Pipe } from '@angular/core'
import { PipeTransform} from '@angular/core'
@Pipe({
	name : 'genderPipe'
})
export class GenderPipe implements PipeTransform
{
	transform(value : string, gender : string){
	  return (gender.toLowerCase()=='male' ? 'Mr.' : 'Miss.') + value;
	}

}