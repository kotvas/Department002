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
var department_events_service_1 = require('../../services/department-events.service');
var expenses_service_1 = require('../../services/expenses.service');
var DepartmentEventsListComponent = (function () {
    function DepartmentEventsListComponent(departmentEventsService, expensesService) {
        this.departmentEventsService = departmentEventsService;
        this.expensesService = expensesService;
    }
    DepartmentEventsListComponent.prototype.getDepartmentEvents = function () {
        var _this = this;
        this.departmentEventsService.getDepartmentEvents()
            .subscribe(function (departmentEvents) { return _this.initDepartmentEvents(departmentEvents); }, function (error) { return _this.errorMessage = error; });
    };
    DepartmentEventsListComponent.prototype.initDepartmentEvents = function (departmentEvents) {
        this.departmentEvents = departmentEvents;
        this.departmentEventsCount = departmentEvents.length;
    };
    DepartmentEventsListComponent.prototype.ngOnInit = function () {
        this.getDepartmentEvents();
    };
    DepartmentEventsListComponent.prototype.generateExpenses = function (eventId) {
        var _this = this;
        this.expensesService.generateExpensesForEvent(eventId)
            .subscribe(function () { return _this.getDepartmentEvents(); }, function (error) { return _this.errorMessage = error; });
    };
    DepartmentEventsListComponent = __decorate([
        core_1.Component({
            selector: 'department-events-list',
            templateUrl: 'app/components/departmentEvents/department-events-list.component.html',
            styleUrls: ['app/components/departmentEvents/department-events-list.component.css'],
            providers: [
                department_events_service_1.DepartmentEventsService, expenses_service_1.ExpensesService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [department_events_service_1.DepartmentEventsService, expenses_service_1.ExpensesService])
    ], DepartmentEventsListComponent);
    return DepartmentEventsListComponent;
}());
exports.DepartmentEventsListComponent = DepartmentEventsListComponent;
//# sourceMappingURL=department-events-list.component.js.map