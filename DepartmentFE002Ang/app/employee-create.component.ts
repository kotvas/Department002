import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { Employee } from './entities/employee';
import { EmployeesService } from './services/employees.service';

@Component({
  //selector: 'employee-detail',
  templateUrl: 'app/employee-create.component.html',
  styleUrls: ['app/employee-create.component.css'],
  providers: [
    EmployeesService, HTTP_PROVIDERS
  ]
})

export class EmployeeCreateComponent implements OnInit {
    title = 'Add New Employee';
    
    errorMessage: string;
    
    employees: Employee[];
    employee = new Employee();
    
    constructor(
        private employeesService: EmployeesService,
        private routeParams: RouteParams) {
    }
        
    getEmployees() {
        this.employeesService.getEmployees()
                        .subscribe(
                        employees => this.employees = employees,
                        error =>  this.errorMessage = <any>error);
    }
     
    ngOnInit() {
        this.getEmployees();
    }
    
    addEmployee (newEmployee: Employee) {
        if (!newEmployee.FirstName) { return; }
        this.employeesService.addEmployee(newEmployee)
                        .subscribe(
                            employee  => this.employees.push(newEmployee),
                            error =>  this.errorMessage = <any>error);
        
        this.getEmployees();
        
        window.history.back();
    }
    
    goBack() {
        window.history.back();
    }
}