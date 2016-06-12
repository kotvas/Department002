import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { Employee } from './entities/employee';
import { EmployeesService } from './services/employees.service';

import { HelpersComponent} from './shared/helpers.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/employees.component.html',
  styleUrls:  ['app/employees.component.css'],
  providers: [
    EmployeesService, HTTP_PROVIDERS, HelpersComponent
  ]
})

export class EmployeesComponent implements OnInit {
    title = 'List of Employees';
        
    errorMessage: string;
    employees: Employee[];
    
    constructor(
        private router: Router,
        private employeesService: EmployeesService,
        private helpersComponent: HelpersComponent) {   
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
    
    gotoEmployeeDetail(employee: Employee) {
        this.router.navigate(['EmployeeDetail', { id: employee.Id }]);
    }
    
    gotoEmployeeCreate() {
        this.router.navigate(['EmployeeCreate'])
    }
}