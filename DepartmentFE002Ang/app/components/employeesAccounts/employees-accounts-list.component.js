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
// Add the RxJS Observable operators we need in this app.
require('../../rxjs-operators');
var employees_accounts_service_1 = require('../../services/employees-accounts.service');
var helpers_component_1 = require('../../shared/helpers.component');
var EmployeesAccountsListComponent = (function () {
    function EmployeesAccountsListComponent(
        //private router: Router,
        employeesAccountsService, helpersComponent) {
        this.employeesAccountsService = employeesAccountsService;
        this.helpersComponent = helpersComponent;
    }
    EmployeesAccountsListComponent.prototype.getEmployeesAccounts = function () {
        var _this = this;
        this.employeesAccountsService.getEmployeesAccounts()
            .subscribe(function (employeesAccounts) { return _this.initEmployeesAccounts(employeesAccounts); }, function (error) { return _this.errorMessage = error; });
    };
    EmployeesAccountsListComponent.prototype.initEmployeesAccounts = function (employeesAccounts) {
        this.employeesAccounts = employeesAccounts;
        this.employeesAccountsCount = employeesAccounts.length;
    };
    EmployeesAccountsListComponent.prototype.ngOnInit = function () {
        this.getEmployeesAccounts();
    };
    EmployeesAccountsListComponent = __decorate([
        core_1.Component({
            selector: 'employees-accounts-list',
            templateUrl: 'app/components/employeesAccounts/employees-accounts-list.component.html',
            styleUrls: ['app/components/employeesAccounts/employees-accounts-list.component.css'],
            providers: [
                employees_accounts_service_1.EmployeesAccountsService, http_1.HTTP_PROVIDERS, helpers_component_1.HelpersComponent
            ]
        }), 
        __metadata('design:paramtypes', [employees_accounts_service_1.EmployeesAccountsService, helpers_component_1.HelpersComponent])
    ], EmployeesAccountsListComponent);
    return EmployeesAccountsListComponent;
}());
exports.EmployeesAccountsListComponent = EmployeesAccountsListComponent;
//# sourceMappingURL=employees-accounts-list.component.js.map