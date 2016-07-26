import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { NgForm } from '@angular/forms';

// Add the RxJS Observable operators we need in this app.
import '../../../rxjs-operators';

import { EventType } from '../../../entities/adminEntities/eventType';
import { AdminService } from '../../../services/admin.service';

@Component({
  //selector: 'employee-detail',
  templateUrl: 'app/components/adminComponents/eventTypes/event-type-create-form.component.html',
  styleUrls: ['app/components/adminComponents/eventTypes/event-type-create-form.component.css'],
  providers: [
    AdminService, HTTP_PROVIDERS
  ]
})

export class EventTypeCreateFormComponent implements OnInit {
    title = 'Add New Event Type';
    
    errorMessage: string;
    eventType = new EventType();
    
    constructor(
        private adminService: AdminService,
        private routeParams: RouteParams) {
    }
     
    ngOnInit() {
    }
    
    onSubmit () {
        if (!this.eventType.Title) { return; }
        this.adminService.addEventType(this.eventType)
                        .subscribe(
                            () => window.history.back(),
                            error =>  this.errorMessage = <any>error);
    }
    
    goBack() {
        window.history.back();
    }
    
    myLog(value) {
        console.log(value);
    }
    
    
}