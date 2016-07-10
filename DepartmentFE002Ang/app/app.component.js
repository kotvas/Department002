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
//Admin section
var event_types_component_1 = require('./components/adminComponents/eventTypes/event-types.component');
var event_type_create_component_1 = require('./components/adminComponents/eventTypes/event-type-create.component');
//Employees section
var employees_component_1 = require('./components/employees/employees.component');
var employee_detail_component_1 = require('./components/employees/employee-detail.component');
var employee_create_component_1 = require('./components/employees/employee-create.component');
//Deposits section
var deposits_component_1 = require('./components/deposits/deposits.component');
var deposit_create_component_1 = require('./components/deposits/deposit-create.component');
//Department Events section
var department_events_component_1 = require('./components/departmentEvents/department-events.component');
var department_event_create_component_1 = require('./components/departmentEvents/department-event-create.component');
//Expenses section
var expenses_component_1 = require('./components/expenses/expenses.component');
//Employees Accounts section
var employees_accounts_component_1 = require('./components/employeesAccounts/employees-accounts.component');
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
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/admin/eventTypeCreate',
                name: 'EventTypeCreate',
                component: event_type_create_component_1.EventTypeCreateComponent
            },
            {
                path: '/admin/eventTypes',
                name: 'EventTypes',
                component: event_types_component_1.EventTypesComponent
            },
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
                path: '/depositCreate',
                name: 'DepositCreate',
                component: deposit_create_component_1.DepositCreateComponent
            },
            {
                path: '/deposits',
                name: 'Deposits',
                component: deposits_component_1.DepositsComponent
            },
            {
                path: '/departmentEventCreate',
                name: 'DepartmentEventCreate',
                component: department_event_create_component_1.DepartmentEventCreateComponent
            },
            {
                path: '/departmentEvents',
                name: 'DepartmentEvents',
                component: department_events_component_1.DepartmentEventsComponent
            },
            {
                path: '/expenses',
                name: 'Expenses',
                component: expenses_component_1.ExpensesComponent
            },
            {
                path: '/employeesAccounts',
                name: 'EmployeesAccounts',
                component: employees_accounts_component_1.EmployeesAccountsComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map