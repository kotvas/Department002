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
//import { Router } from '@angular/router-deprecated';
// Add the RxJS Observable operators we need in this app.
require('../../rxjs-operators');
var expenses_service_1 = require('../../services/expenses.service');
var ExpensesListComponent = (function () {
    function ExpensesListComponent(expensesService) {
        this.expensesService = expensesService;
    }
    ExpensesListComponent.prototype.getExpenses = function () {
        var _this = this;
        this.expensesService.getExpenses()
            .subscribe(function (expenses) { return _this.initExpenses(expenses); }, function (error) { return _this.errorMessage = error; });
    };
    ExpensesListComponent.prototype.initExpenses = function (expenses) {
        this.expenses = expenses;
        this.expensesCount = expenses.length;
    };
    ExpensesListComponent.prototype.logMessage = function (value) {
        console.log(value);
    };
    ExpensesListComponent.prototype.ngOnInit = function () {
        this.getExpenses();
    };
    ExpensesListComponent = __decorate([
        core_1.Component({
            selector: 'expenses-list',
            templateUrl: 'app/components/expenses/expenses-list.component.html',
            styleUrls: ['app/components/expenses/expenses-list.component.css'],
            providers: [
                expenses_service_1.ExpensesService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [expenses_service_1.ExpensesService])
    ], ExpensesListComponent);
    return ExpensesListComponent;
}());
exports.ExpensesListComponent = ExpensesListComponent;
//# sourceMappingURL=expenses-list.component.js.map