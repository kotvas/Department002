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
var EmployeeFormComponent = (function () {
    function EmployeeFormComponent(employeesService, routeParams) {
        this.employeesService = employeesService;
        this.routeParams = routeParams;
        this.formTitle = "FORM TITLE";
        this.editMode = false;
        this.employee = new employee_1.Employee();
    }
    EmployeeFormComponent.prototype.ngOnInit = function () {
        this.employeeId = this.routeParams.get('id');
        this.formType = this.routeParams.get('form');
        this.initFormMode();
        this.initFormData();
    };
    EmployeeFormComponent.prototype.initFormData = function () {
        var _this = this;
        if (this.employeeId) {
            this.employeesService.getEmployee(this.employeeId)
                .subscribe(function (employee) { return _this.initEmployee(employee); }, function (error) { return _this.errorMessage = error; });
        }
    };
    EmployeeFormComponent.prototype.initEmployee = function (employee) {
        this.employee = employee;
    };
    EmployeeFormComponent.prototype.initFormMode = function () {
        if (this.formType == 'view') {
            this.editMode = false;
            this.formTitle = "Display Employee";
        }
        else if (this.formType == 'new' || this.formType == 'edit') {
            this.editMode = true;
            if (this.formType == 'new') {
                this.formTitle = "New Employee";
            }
            else {
                this.formTitle = "Edit Employee";
            }
        }
    };
    EmployeeFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('onSubmit');
        if (this.formType == 'new') {
            console.log('new');
            this.employeesService.addEmployee(this.employee)
                .subscribe(function () { return window.history.back(); }, function (error) { return _this.errorMessage = error; });
        }
        else if (this.formType == 'edit') {
            console.log('edit');
            this.employeesService.updateEmployee(this.employee)
                .subscribe(function () { return window.history.back(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    EmployeeFormComponent.prototype.goBack = function () {
        window.history.back();
    };
    EmployeeFormComponent.prototype.myLog = function (value) {
        console.log(value);
    };
    EmployeeFormComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/employees/employee-form.component.html',
            styleUrls: ['app/components/employees/employee-form.component.css'],
            providers: [
                employees_service_1.EmployeesService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [employees_service_1.EmployeesService, router_deprecated_1.RouteParams])
    ], EmployeeFormComponent);
    return EmployeeFormComponent;
}());
exports.EmployeeFormComponent = EmployeeFormComponent;
//# sourceMappingURL=employee-form.component.js.map