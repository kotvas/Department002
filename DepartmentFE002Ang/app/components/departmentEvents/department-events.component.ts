import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { DepartmentEventsListComponent} from './department-events-list.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/departmentEvents/department-events.component.html',
  styleUrls:  ['app/components/departmentEvents/department-events.component.css'],
  providers: [
    HTTP_PROVIDERS
  ],
  directives:[DepartmentEventsListComponent]
})

export class DepartmentEventsComponent implements OnInit {
    title = 'List of Department Events';
        
    errorMessage: string;
    
    constructor(
        private router: Router) {   
    }
    
    ngOnInit() {
    }
    
    gotoDepartmentEventCreate() {
        this.router.navigate(['DepartmentEventCreate'])
    }
}