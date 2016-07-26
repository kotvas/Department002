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
var department_event_1 = require('../../entities/department-event');
var department_events_service_1 = require('../../services/department-events.service');
var eventType_1 = require('../../entities/adminEntities/eventType');
var admin_service_1 = require('../../services/admin.service');
var employee_1 = require('../../entities/employee');
var employees_service_1 = require('../../services/employees.service');
var DepartmentEventCreateComponent = (function () {
    function DepartmentEventCreateComponent(departmentEventsService, adminService, employeesService, routeParams) {
        this.departmentEventsService = departmentEventsService;
        this.adminService = adminService;
        this.employeesService = employeesService;
        this.routeParams = routeParams;
        this.title = 'Add New Event';
        //departmentEvents: DepartmentEvent[];
        this.departmentEvent = new department_event_1.DepartmentEvent();
        this.selectedEmployee = new employee_1.Employee();
        this.selectedEventType = new eventType_1.EventType();
    }
    // getDepartmentEvents() {
    //     this.departmentEventsService.getDepartmentEvents()
    //                     .subscribe(
    //                     departmentEvents => this.departmentEvents = departmentEvents,
    //                     error =>  this.errorMessage = <any>error);
    // }
    DepartmentEventCreateComponent.prototype.populateEmployees = function (employees) {
        console.log("populateEmployees");
        this.employees = employees;
        this.selectedEmployee = employees[0];
    };
    DepartmentEventCreateComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeesService.getEmployees()
            .subscribe(function (employees) { return _this.populateEmployees(employees); }, function (error) { return _this.errorMessage = error; });
    };
    DepartmentEventCreateComponent.prototype.populateEventTypes = function (eventTypes) {
        this.eventTypes = eventTypes;
        //this.departmentEvent.EventType = eventTypes[0];
        this.selectedEventType = eventTypes[0];
        this.departmentEvent.AmountOfEmployee = this.selectedEventType.AmountOfEmployee;
        this.departmentEvent.AmountOfDepartment = this.selectedEventType.AmountOfDepartment;
    };
    DepartmentEventCreateComponent.prototype.getEventTypes = function () {
        var _this = this;
        this.adminService.getEventTypes()
            .subscribe(function (eventTypes) { return _this.populateEventTypes(eventTypes); }, function (error) { return _this.errorMessage = error; });
    };
    DepartmentEventCreateComponent.prototype.ngOnInit = function () {
        //this.getDepartmentEvents();
        this.getEmployees();
        this.getEventTypes();
    };
    DepartmentEventCreateComponent.prototype.addDepartmentEvent = function (newDepartmentEvent) {
        // console.log("addDepartmentEvent001");
        var _this = this;
        // console.log("newDepartmentEvent:");
        // console.log(newDepartmentEvent);
        // console.log("SelectedEmployee:");
        // console.log(this.selectedEmployee);
        newDepartmentEvent.Employee = this.selectedEmployee;
        newDepartmentEvent.EmployeeId = this.selectedEmployee.Id;
        //console.log("addDepartmentEvent002");
        newDepartmentEvent.EventType = this.selectedEventType;
        newDepartmentEvent.EventTypeId = this.selectedEventType.Id;
        //console.log("addDepartmentEvent003");
        this.departmentEventsService.addDepartmentEvent(newDepartmentEvent)
            .subscribe(function () { return window.history.back(); }, function (error) { return _this.errorMessage = error; });
        //console.log("addDepartmentEvent004");
        //this.getDepartmentEvents();
        //location.reload();
    };
    DepartmentEventCreateComponent.prototype.goBack = function () {
        window.history.back();
    };
    DepartmentEventCreateComponent.prototype.onSelectEmployee = function (employeeId) {
        console.log("onSelectEmployee");
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
    DepartmentEventCreateComponent.prototype.onSelectEventType = function (eventTypeId) {
        console.log("onSelectEventType");
        this.selectedEventType = null;
        for (var i = 0; i < this.eventTypes.length; i++) {
            if (this.eventTypes[i].Id == eventTypeId) {
                this.selectedEventType = this.eventTypes[i];
                this.departmentEvent.AmountOfEmployee = this.selectedEventType.AmountOfEmployee;
                this.departmentEvent.AmountOfDepartment = this.selectedEventType.AmountOfDepartment;
                break;
            }
        }
    };
    DepartmentEventCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/departmentEvents/department-event-create.component.html',
            styleUrls: ['app/components/departmentEvents/department-event-create.component.css'],
            providers: [
                department_events_service_1.DepartmentEventsService, employees_service_1.EmployeesService, admin_service_1.AdminService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [department_events_service_1.DepartmentEventsService, admin_service_1.AdminService, employees_service_1.EmployeesService, router_deprecated_1.RouteParams])
    ], DepartmentEventCreateComponent);
    return DepartmentEventCreateComponent;
}());
exports.DepartmentEventCreateComponent = DepartmentEventCreateComponent;
//# sourceMappingURL=department-event-create.component.js.map