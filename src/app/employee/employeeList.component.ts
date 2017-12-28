import { Component } from '@angular/core';

@Component({
  selector: 'list-employee', 
  templateUrl:'app/employee/employeeList.component.html'
})
export class EmployeeListComponent{

	employees : any[] =[
        {
            code: 'emp101', name: 'Tom', gender: 'Male',
            annualSalary: 5500, dateOfBirth: '25/6/1988'
        },
        {
            code: 'emp102', name: 'Alex', gender: 'Male',
            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
        },
        {
            code: 'emp103', name: 'Linda', gender: 'Female',
            annualSalary: 9500.826, dateOfBirth: '9/10/1980'
        },
        {
            code: 'emp104', name: 'Mike', gender: 'Male',
            annualSalary: 5900, dateOfBirth: '12/8/1979'
        },
        {
            code: 'emp105', name: 'Mary', gender: 'Female',
            annualSalary: 6500.826, dateOfBirth: '14/10/1980'
        },
   
	];
	getTotalEmployeesCount() : number {
	     return this.employees.length;
	}
	getTotalMaleEmployeesCount() : number {
	     return this.employees.filter(e => e.gender === "Male").length; /**using the filter here*/
	}
	getTotalFemaleEmployeesCount() : number {
	     return this.employees.filter(e => e.gender === "Female").length; /**using the filter here*/
	}

	selectedRadioButtonValue : string = 'All';
    
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue)
    {
    	this. selectedRadioButtonValue selectedRadioButtonValue;
    ;
    
    }

}