import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { EventType } from '../entities/adminEntities/eventType';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService {
  constructor (private http: Http) {}
  
  private eventTypesUrl = 'http://localhost:2184/api/admin/EventTypes';  // URL to web API
  
  getEventTypes (): Observable<EventType[]> {
      return this.http.get(this.eventTypesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  addEventType (eventType: EventType): Observable<EventType> {
    let body = JSON.stringify( eventType );
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.eventTypesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  disableEventType (eventTypeId: string)
  {
    let disableURL = this.eventTypesUrl + "/disable/" + eventTypeId;
    return this.http.put(disableURL, "")
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  deleteEventType (eventTypeId: string)
  {
    return this.http.delete(this.eventTypesUrl + "/" + eventTypeId);
      //.map(this.extractData)
      //.catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body;
    
    if (res.text()) {
        body = res.json();
    }
    
    return body || { };
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}