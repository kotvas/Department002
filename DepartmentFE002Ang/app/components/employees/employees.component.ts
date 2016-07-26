import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { EmployeesListComponent} from './employees-list.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/employees/employees.component.html',
  styleUrls:  ['app/components/employees/employees.component.css'],
  directives: [EmployeesListComponent]
})

export class EmployeesComponent implements OnInit {
    title = 'List of Employees';
    
    constructor(
        private router: Router) {   
    }
     
    ngOnInit() {
    }
    
    gotoEmployeeCreate() {
        this.router.navigate(['EmployeeForm', { form: 'new' }]);
    }
}