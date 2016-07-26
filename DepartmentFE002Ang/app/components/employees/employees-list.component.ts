import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router-deprecated';

import { GetSafeDatePipe } from '../../pipes/getSafeDate.pipe';
import { GetFilteredEmployeesPipe} from '../../pipes/getFilteredEmployees.pipe';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { Employee } from '../../entities/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'employees-list',
  templateUrl: 'app/components/employees/employees-list.component.html',
  styleUrls:  ['app/components/employees/employees-list.component.css'],
  providers: [
    EmployeesService, HTTP_PROVIDERS
  ],
  pipes: [ GetSafeDatePipe, GetFilteredEmployeesPipe ]
})

export class EmployeesListComponent implements OnInit {
    
    errorMessage: string;
    employees: Employee[];

    searchValue: string = "";
    
    constructor(
        private router: Router,
        private employeesService: EmployeesService) {   
    }
    
    getEmployees() {
        this.employeesService.getEmployees()
                    .subscribe(
                        employees => this.initEmployees(employees),
                        error =>  this.errorMessage = <any>error);
    }
    
    initEmployees(employees) {
        this.employees = employees;
        console.log("collection: " + employees.length);
    }
     
    ngOnInit() {
        this.getEmployees();
    }
    
    deleteEmployee(value) {
        this.employeesService.disableEmployee(value)
           .subscribe((res) => { this.getEmployees(); });
    }
    
    viewEmployee(employee: Employee) {
        this.router.navigate(['EmployeeForm', { form: 'view', id: employee.Id }]);
    }
}