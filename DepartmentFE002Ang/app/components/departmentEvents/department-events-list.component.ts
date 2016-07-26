import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { DepartmentEvent } from '../../entities/department-event';
import { DepartmentEventsService } from '../../services/department-events.service';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'department-events-list',
  templateUrl: 'app/components/departmentEvents/department-events-list.component.html',
  styleUrls:  ['app/components/departmentEvents/department-events-list.component.css'],
  providers: [
    DepartmentEventsService, ExpensesService, HTTP_PROVIDERS
  ]
})

export class DepartmentEventsListComponent implements OnInit {
    
    errorMessage: string;
    departmentEvents: DepartmentEvent[];
    departmentEventsCount: number;
    
    constructor(
        private departmentEventsService: DepartmentEventsService,
        private expensesService: ExpensesService) {   
    }
    
    getDepartmentEvents() {
        this.departmentEventsService.getDepartmentEvents()
                        .subscribe(
                            departmentEvents => this.initDepartmentEvents(departmentEvents),
                            error =>  this.errorMessage = <any>error);
    }
    
    initDepartmentEvents(departmentEvents) {
        this.departmentEvents = departmentEvents;
        this.departmentEventsCount = departmentEvents.length;
    }
     
    ngOnInit() {
        this.getDepartmentEvents();
    }
    
    generateExpenses(eventId: string) {
        this.expensesService.generateExpensesForEvent(eventId)
            .subscribe(
                ()  => this.getDepartmentEvents(),
                error =>  this.errorMessage = <any>error);
    }
}