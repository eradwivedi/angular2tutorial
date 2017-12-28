import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/views/employeeCount.component.html',
    styleUrls: ['css/employeeCount.component.css']
})
export class EmployeeCountComponent {
    selectedRadioButtonValue : string = 'All';
    
    @Output()
    countRadioButtonSelectionChanged : EventEmitter<string> =new EventEmitter<string>();
    /**Custom event*/

    @Input()
    all: number ;

    @Input()
    male: number ;

    @Input()
    female: number ;

    /**Raise the custom event*/
    onRadioButtonSelectionChange()
    {
    			this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
    }
}