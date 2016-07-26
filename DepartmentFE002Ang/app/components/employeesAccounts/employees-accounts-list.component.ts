import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { GetSafeDatePipe } from '../../pipes/getSafeDate.pipe';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { EmployeeAccount } from '../../entities/employee-account';
import { EmployeesAccountsService } from '../../services/employees-accounts.service';

@Component({
  selector: 'employees-accounts-list',
  templateUrl: 'app/components/employeesAccounts/employees-accounts-list.component.html',
  styleUrls:  ['app/components/employeesAccounts/employees-accounts-list.component.css'],
  providers: [
    EmployeesAccountsService, HTTP_PROVIDERS
  ],
  pipes: [ GetSafeDatePipe ]
})

export class EmployeesAccountsListComponent implements OnInit {
    
    errorMessage: string;
    employeesAccounts: EmployeeAccount[];
    employeesAccountsCount: number;
    
    constructor(
        private employeesAccountsService: EmployeesAccountsService) {   
    }
    
    getEmployeesAccounts() {
        this.employeesAccountsService.getEmployeesAccounts()
                        .subscribe(
                        employeesAccounts => this.initEmployeesAccounts(employeesAccounts),
                        error =>  this.errorMessage = <any>error);
    }
    
    initEmployeesAccounts(employeesAccounts) {
        this.employeesAccounts = employeesAccounts;
        this.employeesAccountsCount = employeesAccounts.length;
    }
     
    ngOnInit() {
        this.getEmployeesAccounts();
    }
}