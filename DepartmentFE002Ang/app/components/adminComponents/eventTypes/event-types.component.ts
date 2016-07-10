import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../../rxjs-operators';

import { EventTypesListComponent} from './event-types-list.component';

@Component({
  //selector: 'my-app',
  templateUrl: 'app/components/adminComponents/eventTypes/event-types.component.html',
  styleUrls:  ['app/components/adminComponents/eventTypes/event-types.component.css'],
  providers: [
    HTTP_PROVIDERS
  ],
  directives:[EventTypesListComponent]
})

export class EventTypesComponent implements OnInit {
    title = 'Event Types';
    
    constructor(
        private router: Router) {   
    }
    
    ngOnInit() {
    }
    
    gotoEventTypeCreate() {
        this.router.navigate(['EventTypeCreate'])
    }
}