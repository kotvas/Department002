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
    console.log("EventType:" + eventType);
    
    let body = JSON.stringify( eventType );
    
    console.log(body);
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log("before post");

    return this.http.post(this.eventTypesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
      console.log("before body");
      let body = res.json();
      console.log("after body");
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