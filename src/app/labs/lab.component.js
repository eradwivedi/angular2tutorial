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
var lab_service_1 = require("./lab.service");
var LabComponent = (function () {
    function LabComponent(_labService) {
        this._labService = _labService;
        this.statusMessage = 'Loading Data Please Wait';
    }
    LabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._labService.getLabs().subscribe(function (LabsData) { return _this.labs = LabsData; }, function (error) { _this.statusMessage = error; });
    };
    return LabComponent;
}());
LabComponent = __decorate([
    core_1.Component({
        selector: 'list-lab',
        templateUrl: 'app/labs/lab.component.html',
        styles: ['app/style.css'],
        providers: [lab_service_1.LabService]
    }),
    __metadata("design:paramtypes", [lab_service_1.LabService])
], LabComponent);
exports.LabComponent = LabComponent;
//# sourceMappingURL=lab.component.js.map