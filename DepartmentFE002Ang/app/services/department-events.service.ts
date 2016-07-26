import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { DepartmentEvent } from '../entities/department-event';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartmentEventsService {
  constructor (private http: Http) {}
  
  private departmentEventsUrl = 'http://localhost:2184/api/departmentEvents';  // URL to web API
  
  getDepartmentEvents (): Observable<DepartmentEvent[]> {
    return this.http.get(this.departmentEventsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  addDepartmentEvent (departmentEvent: DepartmentEvent): Observable<DepartmentEvent> {
    let body = JSON.stringify( departmentEvent );
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.departmentEventsUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
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