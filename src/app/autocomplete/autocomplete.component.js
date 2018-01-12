"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_completer_1 = require("ng2-completer");
var AutoCompleteComponent = (function () {
    function AutoCompleteComponent(completerService) {
        this.completerService = completerService;
        this.searchData = [
            { color: 'red', value: '#f00' },
            { color: 'green', value: '#0f0' },
            { color: 'blue', value: '#00f' },
            { color: 'cyan', value: '#0ff' },
            { color: 'magenta', value: '#f0f' },
            { color: 'yellow', value: '#ff0' },
            { color: 'black', value: '#000' }
        ];
        this.captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett'];
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }
    return AutoCompleteComponent;
}());
AutoCompleteComponent = __decorate([
    core_1.Component({
        selector: 'auto-complete-component',
        template: "<h1>Search color</h1>\n            <ng2-completer [(ngModel)]=\"searchStr\" [datasource]=\"dataService\" [minSearchLength]=\"0\"></ng2-completer>\n            <h1>Search captain</h1>\n            <ng2-completer [(ngModel)]=\"captain\" [datasource]=\"captains\" [minSearchLength]=\"0\"></ng2-completer>"
    }),
    __metadata("design:paramtypes", [ng2_completer_1.CompleterService])
], AutoCompleteComponent);
exports.AutoCompleteComponent = AutoCompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map