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
require('./rxjs-operators');
var employees_service_1 = require('./services/employees.service');
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(employeesService, routeParams) {
        this.employeesService = employeesService;
        this.routeParams = routeParams;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.routeParams.get('id');
        this.employeesService.getEmployee(id)
            .subscribe(function (employee) { return _this.employee = employee; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            //selector: 'employee-detail',
            templateUrl: 'app/employee-detail.component.html',
            styleUrls: ['app/employee-detail.component.css'],
            providers: [
                employees_service_1.EmployeesService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [employees_service_1.EmployeesService, router_deprecated_1.RouteParams])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map