"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core"); /** reqiured for all apps, includes ng-if and ng-for; required to add metadata to an angular module */
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var gender_pipe_1 = require("./utils/gender.pipe");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeCount_component_1 = require("./employee/components/employeeCount.component");
var forms_component_1 = require("./forms/forms.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, forms_component_1.FormsComponent, employeeList_component_1.EmployeeListComponent, gender_pipe_1.GenderPipe, employeeCount_component_1.EmployeeCountComponent],
        bootstrap: [app_component_1.AppComponent] /** Root component with bootstraps the project. its directive is our home page*/
    })
], AppModule);
exports.AppModule = AppModule;
/** App module is the root module which bootstraps the angular code */ 
//# sourceMappingURL=app.module.js.map