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
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
// Add the RxJS Observable operators we need in this app.
require('../../rxjs-operators');
var employee_1 = require('../../entities/employee');
var employees_service_1 = require('../../services/employees.service');
var EmployeeCreateComponent = (function () {
    function EmployeeCreateComponent(employeesService, routeParams) {
        this.employeesService = employeesService;
        this.routeParams = routeParams;
        this.title = 'Add New Employee';
        this.employee = new employee_1.Employee();
    }
    EmployeeCreateComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeesService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeCreateComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeeCreateComponent.prototype.addEmployee = function (newEmployee) {
        var _this = this;
        if (!newEmployee.FirstName) {
            return;
        }
        this.employeesService.addEmployee(newEmployee)
            .subscribe(function (employee) { return _this.employees.push(newEmployee); }, function (error) { return _this.errorMessage = error; });
        this.getEmployees();
        window.history.back();
    };
    EmployeeCreateComponent.prototype.goBack = function () {
        window.history.back();
    };
    EmployeeCreateComponent = __decorate([
        core_1.Component({
            //selector: 'employee-detail',
            templateUrl: 'app/components/employees/employee-create.component.html',
            styleUrls: ['app/components/employees/employee-create.component.css'],
            providers: [
                employees_service_1.EmployeesService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [employees_service_1.EmployeesService, router_deprecated_1.RouteParams])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());
exports.EmployeeCreateComponent = EmployeeCreateComponent;
//# sourceMappingURL=employee-create.component.js.map