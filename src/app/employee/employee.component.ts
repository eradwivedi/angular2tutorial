import { Component } from '@angular/core';

@Component({
  selector: 'my-employee', 
  templateUrl:'app/employee/employee.component.html'
})
export class EmployeeComponent{
	firstName : string ='Era';
	lastName : string='Dwivedi';
	gender: string='Female';
	age : number =25
	showDetails : boolean =false;

	toggleDetails() : void {
	   this.showDetails=!this.showDetails;
	}
}