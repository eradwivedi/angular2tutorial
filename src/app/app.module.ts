import { NgModule }      from '@angular/core'; /** reqiured for all apps, includes ng-if and ng-for; required to add metadata to an angular module */
import { FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { Ng2CompleterModule } from "ng2-completer";
import { GenderPipe } from './utils/gender.pipe'
import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { LabComponent } from './labs/lab.component';

import { AutoCompleteComponent } from './autocomplete/autocomplete.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeCountComponent } from './employee/components/employeeCount.component';
import { FormsComponent } from './forms/forms.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,Ng2CompleterModule ], /** */
  declarations: [ AppComponent,EmployeeComponent,FormsComponent,EmployeeListComponent,GenderPipe,EmployeeCountComponent,LabComponent,AutoCompleteComponent  ], /** Registering these components with this module*/
  bootstrap:    [ AppComponent ] /** Root component with bootstraps the project. its directive is our home page*/
})
export class AppModule { }

/** App module is the root module which bootstraps the angular code */