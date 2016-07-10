import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { EmployeeAccount } from '../entities/employee-account';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeesAccountsService {
  constructor (private http: Http) {}
  
  private employeesAccountsUrl = 'http://localhost:2184/api/EmployeesAccounts';  // URL to web API
  
  getEmployeesAccounts (): Observable<EmployeeAccount[]> {
    return this.http.get(this.employeesAccountsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
//   getEmployee (id: string): Observable<Employee> {
//     console.log("employee id: " + id)
//     return this.http.get(this.employeesUrl + "/" + id)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }
  
//   addEmployee (employee: Employee): Observable<Employee> {
    
//     console.log("Employee:" + employee);
    
//     let body = JSON.stringify( employee );
    
//     console.log(body);
    
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });

//     console.log("before post");

//     return this.http.post(this.employeesUrl, body, options)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }
  
  private extractData(res: Response) {
    
    console.log("before body extractData");
    
    let body = res.json();
    
    console.log(body);
    
    console.log("after body extractData");
    
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