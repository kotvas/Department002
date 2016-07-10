import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { EmployeeAccount } from '../../entities/employee-account';
import { EmployeesAccountsService } from '../../services/employees-accounts.service';

import { HelpersComponent} from '../../shared/helpers.component';

@Component({
  selector: 'employees-accounts-list',
  templateUrl: 'app/components/employeesAccounts/employees-accounts-list.component.html',
  styleUrls:  ['app/components/employeesAccounts/employees-accounts-list.component.css'],
  providers: [
    EmployeesAccountsService, HTTP_PROVIDERS, HelpersComponent
  ]
})

export class EmployeesAccountsListComponent implements OnInit {
    
    errorMessage: string;
    employeesAccounts: EmployeeAccount[];
    employeesAccountsCount: number;
    
    constructor(
        //private router: Router,
        private employeesAccountsService: EmployeesAccountsService,
        private helpersComponent: HelpersComponent) {   
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