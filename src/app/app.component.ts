import { Component } from '@angular/core';
/** importing the component decorator from angular core
applying the compoent decorator i.e, @Component to our class to write the metadata for it. The parametes passed to this is the metadata for our class*/
@Component({
  selector: 'my-app', /** this is the directive used to include the template corresponding to this component anywhere*/
  /**template: `<h1>Hello {{name}}</h1>`,  back tick characters can be replaced by single or double quotes when the template is in a single line*/
  templateUrl:'app/views/app.component.html'
    /*template: `<div>
                    <h1>{{pageHeader}}</h1>
                    <img src='{{imagePath}}'/>
                    <my-employee></my-employee>
                    <my-forms></my-forms>
                   
                    <list-employee></list-employee>

                </div>`*/
})
export class AppComponent  { 
    pageHeader: string = 'Employee Details';
    imagePath: string = 'http://pragimtech.com/images/logo.jpg';
 }





