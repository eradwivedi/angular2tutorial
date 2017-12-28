"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/** importing the component decorator from angular core
applying the compoent decorator i.e, @Component to our class to write the metadata for it. The parametes passed to this is the metadata for our class*/
var AppComponent = (function () {
    function AppComponent() {
        this.pageHeader = 'Employee Details';
        this.imagePath = 'http://pragimtech.com/images/logo.jpg';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        /**template: `<h1>Hello {{name}}</h1>`,  back tick characters can be replaced by single or double quotes when the template is in a single line*/
        templateUrl: 'app/views/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map