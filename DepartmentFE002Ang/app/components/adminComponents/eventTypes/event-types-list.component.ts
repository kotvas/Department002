import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import '../../../rxjs-operators';

import { EventType } from '../../../entities/adminEntities/eventType';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'event-types-list',
  templateUrl: 'app/components/adminComponents/eventTypes/event-types-list.component.html',
  styleUrls:  ['app/components/adminComponents/eventTypes/event-types-list.component.css'],
  providers: [
    AdminService, HTTP_PROVIDERS
  ]
})

export class EventTypesListComponent implements OnInit {
    
    errorMessage: string;
    eventTypes: EventType[];
    
    constructor(
        private adminService: AdminService) {   
    }
    
    getEventTypes() {
        this.adminService.getEventTypes()
                    .subscribe(
                        eventTypes => this.initEventTypes(eventTypes),
                        error =>  this.errorMessage = <any>error);
    }
    
    initEventTypes(eventTypes) {
        this.eventTypes = eventTypes;
        console.log("collection: " + eventTypes.length);
    }
     
    ngOnInit() {
        this.getEventTypes();
    }
    
    deleteEventType(value) {
        this.adminService.disableEventType(value)
           .subscribe((res) => { this.getEventTypes();} );
    }
}