import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { DepartmentEvent } from '../../entities/department-event';
import { DepartmentEventsService } from '../../services/department-events.service';

import { EventType } from '../../entities/adminEntities/eventType'
import { AdminService } from '../../services/admin.service'

import { Employee } from '../../entities/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  templateUrl: 'app/components/departmentEvents/department-event-create.component.html',
  styleUrls: ['app/components/departmentEvents/department-event-create.component.css'],
  providers: [
    DepartmentEventsService, EmployeesService, AdminService, HTTP_PROVIDERS
  ]
})

export class DepartmentEventCreateComponent implements OnInit {
    title = 'Add New Event';
    
    errorMessage: string;
    
    departmentEvents: DepartmentEvent[];
    departmentEvent = new DepartmentEvent();
    
    employees: Employee[];
    selectedEmployee = new Employee();
    
    eventTypes: EventType[];
    selectedEventType = new EventType();
    
    constructor(
        private departmentEventsService: DepartmentEventsService,
        private adminService: AdminService,
        private employeesService: EmployeesService,
        private routeParams: RouteParams) {
    }
        
    getDepartmentEvents() {
        this.departmentEventsService.getDepartmentEvents()
                        .subscribe(
                        departmentEvents => this.departmentEvents = departmentEvents,
                        error =>  this.errorMessage = <any>error);
    }
    
    populateEmployees(employees: Employee[]) {
        console.log("populateEmployees")
        
        this.employees = employees;
        this.selectedEmployee = employees[0];
    }
    
    getEmployees() {
        this.employeesService.getEmployees()
                        .subscribe(
                        employees => this.populateEmployees(employees),
                        error =>  this.errorMessage = <any>error);
    }
    
    populateEventTypes(eventTypes: EventType[]) {
        this.eventTypes = eventTypes;
        this.selectedEventType = eventTypes[0];
        this.departmentEvent.AmountOfEmployee = this.selectedEventType.AmountOfEmployee;
        this.departmentEvent.AmountOfDepartment = this.selectedEventType.AmountOfDepartment;
    }
    
    getEventTypes() {
        this.adminService.getEventTypes()
                        .subscribe(
                        eventTypes => this.populateEventTypes(eventTypes),
                        error =>  this.errorMessage = <any>error);
    }
     
    ngOnInit() {
        this.getDepartmentEvents();
        this.getEmployees();
        this.getEventTypes();
    }
    
    addDepartmentEvent (newDepartmentEvent: DepartmentEvent) {
        console.log("addDepartmentEvent001");
        
        console.log("newDepartmentEvent:");
        console.log(newDepartmentEvent);
        
        console.log("SelectedEmployee:");
        console.log(this.selectedEmployee);
        
        newDepartmentEvent.Employee = this.selectedEmployee;
        newDepartmentEvent.EmployeeId = this.selectedEmployee.Id;
        
        console.log("addDepartmentEvent002");
        
        newDepartmentEvent.EventType = this.selectedEventType;
        newDepartmentEvent.EventTypeId = this.selectedEventType.Id;
        
        console.log("addDepartmentEvent003");
        
        this.departmentEventsService.addDepartmentEvent(newDepartmentEvent)
                        .subscribe(
                            newDepartmentEvent  => this.departmentEvents.push(newDepartmentEvent),
                            error =>  this.errorMessage = <any>error);
        
        console.log("addDepartmentEvent004");
        
        this.getDepartmentEvents();
        
        window.history.back();
        //location.reload();
    }
    
    goBack() {
        window.history.back();
    }
    
    onSelectEmployee(employeeId) { 
        this.selectedEmployee = null;
        for (var i = 0; i < this.employees.length; i++)
        {
            //console.log(this.employees[i]);
            //console.log(this.employees[i].Id);
            //console.log(employeeId);
          if (this.employees[i].Id == employeeId) {
            this.selectedEmployee = this.employees[i];
            break;
          }
        }
    }
    
    onSelectEventType(eventTypeId) { 
        this.selectedEventType = null;
        for (var i = 0; i < this.eventTypes.length; i++)
        {
          if (this.eventTypes[i].Id == eventTypeId) {
            this.selectedEventType = this.eventTypes[i];
            this.departmentEvent.AmountOfEmployee = this.selectedEventType.AmountOfEmployee;
            this.departmentEvent.AmountOfDepartment = this.selectedEventType.AmountOfDepartment;
            break;
          }
        }
    }
}