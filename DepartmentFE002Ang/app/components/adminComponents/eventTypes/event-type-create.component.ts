import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import '../../../rxjs-operators';

import { EventType } from '../../../entities/adminEntities/eventType';
import { AdminService } from '../../../services/admin.service';

@Component({
  //selector: 'employee-detail',
  templateUrl: 'app/components/adminComponents/eventTypes/event-type-create.component.html',
  styleUrls: ['app/components/adminComponents/eventTypes/event-type-create.component.css'],
  providers: [
    AdminService, HTTP_PROVIDERS
  ]
})

export class EventTypeCreateComponent implements OnInit {
    title = 'Add New Event Type';
    
    errorMessage: string;
    
    eventTypes: EventType[];
    eventType = new EventType();
    
    constructor(
        private adminService: AdminService,
        private routeParams: RouteParams) {
    }
        
    getEventTypes() {
        this.adminService.getEventTypes()
                        .subscribe(
                        eventTypes => this.eventTypes = eventTypes,
                        error =>  this.errorMessage = <any>error);
    }
     
    ngOnInit() {
        this.getEventTypes();
    }
    
    addEventType (newEventType: EventType) {
        if (!newEventType.Title) { return; }
        this.adminService.addEventType(newEventType)
                        .subscribe(
                            employee  => this.eventTypes.push(newEventType),
                            error =>  this.errorMessage = <any>error);
        
        this.getEventTypes();
        
        window.history.back();
    }
    
    goBack() {
        window.history.back();
    }
}