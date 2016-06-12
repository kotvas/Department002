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
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
// Add the RxJS Observable operators we need in this app.
require('./rxjs-operators');
var employees_service_1 = require('./services/employees.service');
var helpers_component_1 = require('./shared/helpers.component');
var EmployeesComponent = (function () {
    function EmployeesComponent(router, employeesService, helpersComponent) {
        this.router = router;
        this.employeesService = employeesService;
        this.helpersComponent = helpersComponent;
        this.title = 'List of Employees';
    }
    EmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeesService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeesComponent.prototype.gotoEmployeeDetail = function (employee) {
        this.router.navigate(['EmployeeDetail', { id: employee.Id }]);
    };
    EmployeesComponent.prototype.gotoEmployeeCreate = function () {
        this.router.navigate(['EmployeeCreate']);
    };
    EmployeesComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/employees.component.html',
            styleUrls: ['app/employees.component.css'],
            providers: [
                employees_service_1.EmployeesService, http_1.HTTP_PROVIDERS, helpers_component_1.HelpersComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, employees_service_1.EmployeesService, helpers_component_1.HelpersComponent])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map