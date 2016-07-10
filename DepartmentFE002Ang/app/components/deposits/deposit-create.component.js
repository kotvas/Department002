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
var deposit_1 = require('../../entities/deposit');
var deposits_service_1 = require('../../services/deposits.service');
var employee_1 = require('../../entities/employee');
var employees_service_1 = require('../../services/employees.service');
var DepositCreateComponent = (function () {
    function DepositCreateComponent(depositsService, employeesService, routeParams) {
        this.depositsService = depositsService;
        this.employeesService = employeesService;
        this.routeParams = routeParams;
        this.title = 'Add New Deposit';
        this.deposit = new deposit_1.Deposit();
        this.selectedEmployee = new employee_1.Employee();
    }
    DepositCreateComponent.prototype.getDeposits = function () {
        var _this = this;
        this.depositsService.getDeposits()
            .subscribe(function (deposits) { return _this.deposits = deposits; }, function (error) { return _this.errorMessage = error; });
    };
    DepositCreateComponent.prototype.populateEmployees = function (employees) {
        this.employees = employees;
        this.selectedEmployee = employees[0];
    };
    DepositCreateComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeesService.getEmployees()
            .subscribe(function (employees) { return _this.populateEmployees(employees); }, function (error) { return _this.errorMessage = error; });
    };
    DepositCreateComponent.prototype.ngOnInit = function () {
        this.getDeposits();
        this.getEmployees();
    };
    DepositCreateComponent.prototype.addDeposit = function (newDeposit) {
        var _this = this;
        if (!newDeposit.Amount) {
            return;
        }
        //console.log(newDeposit);
        //console.log(this.selectedEmployee);
        newDeposit.Employee = this.selectedEmployee;
        newDeposit.EmployeeId = this.selectedEmployee.Id;
        this.depositsService.addDeposit(newDeposit)
            .subscribe(function (employee) { return _this.deposits.push(newDeposit); }, function (error) { return _this.errorMessage = error; });
        this.getDeposits();
        window.history.back();
        //location.reload();
    };
    DepositCreateComponent.prototype.goBack = function () {
        window.history.back();
    };
    DepositCreateComponent.prototype.onSelectEmployee = function (employeeId) {
        this.selectedEmployee = null;
        for (var i = 0; i < this.employees.length; i++) {
            //console.log(this.employees[i]);
            //console.log(this.employees[i].Id);
            //console.log(employeeId);
            if (this.employees[i].Id == employeeId) {
                this.selectedEmployee = this.employees[i];
                break;
            }
        }
    };
    DepositCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/deposits/deposit-create.component.html',
            styleUrls: ['app/components/deposits/deposit-create.component.css'],
            providers: [
                deposits_service_1.DepositsService, employees_service_1.EmployeesService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [deposits_service_1.DepositsService, employees_service_1.EmployeesService, router_deprecated_1.RouteParams])
    ], DepositCreateComponent);
    return DepositCreateComponent;
}());
exports.DepositCreateComponent = DepositCreateComponent;
//# sourceMappingURL=deposit-create.component.js.map