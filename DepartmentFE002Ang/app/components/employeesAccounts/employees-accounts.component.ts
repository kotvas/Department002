import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { EmployeesAccountsListComponent} from './employees-accounts-list.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/employeesAccounts/employees-accounts.component.html',
  styleUrls:  ['app/components/employeesAccounts/employees-accounts.component.css'],
  providers: [
    HTTP_PROVIDERS
  ],
  directives:[EmployeesAccountsListComponent]
})

export class EmployeesAccountsComponent implements OnInit {
    title = 'List of Employees Accounts';
        
    errorMessage: string;
    
    constructor(
        private router: Router) {   
    }
    
    ngOnInit() {
    }
}