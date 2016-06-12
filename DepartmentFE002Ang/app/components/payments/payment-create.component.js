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
var payment_1 = require('../../entities/payment');
var payments_service_1 = require('../../services/payments.service');
var employee_1 = require('../../entities/employee');
var employees_service_1 = require('../../services/employees.service');
var PaymentCreateComponent = (function () {
    function PaymentCreateComponent(paymentsService, employeesService, routeParams) {
        this.paymentsService = paymentsService;
        this.employeesService = employeesService;
        this.routeParams = routeParams;
        this.title = 'Add New Payment';
        this.payment = new payment_1.Payment();
        this.selectedEmployee = new employee_1.Employee();
    }
    PaymentCreateComponent.prototype.getPayments = function () {
        var _this = this;
        this.paymentsService.getPayments()
            .subscribe(function (payments) { return _this.payments = payments; }, function (error) { return _this.errorMessage = error; });
    };
    PaymentCreateComponent.prototype.populateEmployees = function (employees) {
        this.employees = employees;
        this.selectedEmployee = employees[0];
    };
    PaymentCreateComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeesService.getEmployees()
            .subscribe(function (employees) { return _this.populateEmployees(employees); }, // this.employees = employees,
        function (// this.employees = employees,
            error) { return _this.errorMessage = error; });
    };
    PaymentCreateComponent.prototype.ngOnInit = function () {
        this.getPayments();
        this.getEmployees();
    };
    PaymentCreateComponent.prototype.addPayment = function (newPayment) {
        var _this = this;
        if (!newPayment.Amount) {
            return;
        }
        //console.log(newPayment);
        //console.log(this.selectedEmployee);
        newPayment.Employee = this.selectedEmployee;
        newPayment.EmployeeId = this.selectedEmployee.Id;
        this.paymentsService.addPayment(newPayment)
            .subscribe(function (employee) { return _this.payments.push(newPayment); }, function (error) { return _this.errorMessage = error; });
        this.getPayments();
        window.history.back();
        //location.reload();
    };
    PaymentCreateComponent.prototype.goBack = function () {
        window.history.back();
    };
    PaymentCreateComponent.prototype.onSelectEmployee = function (employeeId) {
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
    PaymentCreateComponent = __decorate([
        core_1.Component({
            //selector: 'employee-detail',
            templateUrl: 'app/components/payments/payment-create.component.html',
            styleUrls: ['app/components/payments/payment-create.component.css'],
            providers: [
                payments_service_1.PaymentsService, employees_service_1.EmployeesService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [payments_service_1.PaymentsService, employees_service_1.EmployeesService, router_deprecated_1.RouteParams])
    ], PaymentCreateComponent);
    return PaymentCreateComponent;
}());
exports.PaymentCreateComponent = PaymentCreateComponent;
//# sourceMappingURL=payment-create.component.js.map