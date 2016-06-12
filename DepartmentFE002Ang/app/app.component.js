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
var employees_service_1 = require('./services/employees.service');
var employees_component_1 = require('./components/employees/employees.component');
var employee_detail_component_1 = require('./components/employees/employee-detail.component');
var employee_create_component_1 = require('./components/employees/employee-create.component');
var payments_component_1 = require('./components/payments/payments.component');
var payment_create_component_1 = require('./components/payments/payment-create.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Department';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                employees_service_1.EmployeesService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/detail/:id',
                name: 'EmployeeDetail',
                component: employee_detail_component_1.EmployeeDetailComponent
            },
            {
                path: '/create',
                name: 'EmployeeCreate',
                component: employee_create_component_1.EmployeeCreateComponent
            },
            {
                path: '/employees',
                name: 'Employees',
                component: employees_component_1.EmployeesComponent,
                useAsDefault: true
            },
            {
                path: '/PaymentCreate',
                name: 'PaymentCreate',
                component: payment_create_component_1.PaymentCreateComponent
            },
            {
                path: '/payments',
                name: 'Payments',
                component: payments_component_1.PaymentsComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map