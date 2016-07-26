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
var getSafeDate_pipe_1 = require('../../pipes/getSafeDate.pipe');
var getFilteredEmployees_pipe_1 = require('../../pipes/getFilteredEmployees.pipe');
// Add the RxJS Observable operators we need in this app.
require('../../rxjs-operators');
var employees_service_1 = require('../../services/employees.service');
var EmployeesListComponent = (function () {
    function EmployeesListComponent(router, employeesService) {
        this.router = router;
        this.employeesService = employeesService;
        this.searchValue = "";
    }
    EmployeesListComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeesService.getEmployees()
            .subscribe(function (employees) { return _this.initEmployees(employees); }, function (error) { return _this.errorMessage = error; });
    };
    EmployeesListComponent.prototype.initEmployees = function (employees) {
        this.employees = employees;
        console.log("collection: " + employees.length);
    };
    EmployeesListComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeesListComponent.prototype.deleteEmployee = function (value) {
        var _this = this;
        this.employeesService.disableEmployee(value)
            .subscribe(function (res) { _this.getEmployees(); });
    };
    EmployeesListComponent.prototype.viewEmployee = function (employee) {
        this.router.navigate(['EmployeeForm', { form: 'view', id: employee.Id }]);
    };
    EmployeesListComponent = __decorate([
        core_1.Component({
            selector: 'employees-list',
            templateUrl: 'app/components/employees/employees-list.component.html',
            styleUrls: ['app/components/employees/employees-list.component.css'],
            providers: [
                employees_service_1.EmployeesService, http_1.HTTP_PROVIDERS
            ],
            pipes: [getSafeDate_pipe_1.GetSafeDatePipe, getFilteredEmployees_pipe_1.GetFilteredEmployeesPipe]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, employees_service_1.EmployeesService])
    ], EmployeesListComponent);
    return EmployeesListComponent;
}());
exports.EmployeesListComponent = EmployeesListComponent;
//# sourceMappingURL=employees-list.component.js.map