import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { Employee } from './entities/employee';
import { EmployeesService } from './services/employees.service';

@Component({
  //selector: 'employee-detail',
  templateUrl: 'app/employee-detail.component.html',
  styleUrls: ['app/employee-detail.component.css'],
  providers: [
    EmployeesService, HTTP_PROVIDERS
  ]
})

export class EmployeeDetailComponent implements OnInit {
    employee: Employee;
    errorMessage: string;
    
    constructor(
        private employeesService: EmployeesService,
        private routeParams: RouteParams) {
    }
        
    ngOnInit() {
        let id = this.routeParams.get('id');
        this.employeesService.getEmployee(id)
                    .subscribe(
                        employee => this.employee = employee,
                        error =>  this.errorMessage = <any>error);
    }
    
    goBack() {
        window.history.back();
    }
}