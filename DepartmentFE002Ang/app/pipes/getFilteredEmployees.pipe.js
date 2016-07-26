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
var core_1 = require('@angular/core');
var GetFilteredEmployeesPipe = (function () {
    function GetFilteredEmployeesPipe() {
    }
    GetFilteredEmployeesPipe.prototype.transform = function (allEmployees, searchValue) {
        console.log("GetFilteredEmployeesPipe");
        console.log(searchValue);
        var searchValueToLower = searchValue.toLowerCase();
        var filteredEmployees = null;
        if (allEmployees) {
            console.log("filteredEmployees");
            filteredEmployees = allEmployees
                .filter(function (empl) { return empl.FirstName.toLowerCase().includes(searchValue); });
            console.log(filteredEmployees);
        }
        return filteredEmployees ? filteredEmployees : allEmployees;
    };
    GetFilteredEmployeesPipe = __decorate([
        core_1.Pipe({
            name: 'getFilteredEmployees',
            pure: true
        }), 
        __metadata('design:paramtypes', [])
    ], GetFilteredEmployeesPipe);
    return GetFilteredEmployeesPipe;
}());
exports.GetFilteredEmployeesPipe = GetFilteredEmployeesPipe;
//# sourceMappingURL=getFilteredEmployees.pipe.js.map