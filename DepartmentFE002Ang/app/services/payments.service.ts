import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Payment } from '../entities/payment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaymentsService {
  constructor (private http: Http) {}
  
  private paymentsUrl = 'http://localhost:2184/api/payments';  // URL to web API
  
  getPayments (): Observable<Payment[]> {
    return this.http.get(this.paymentsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
//   getEmployee (id: string): Observable<Employee> {
//     console.log("employee id: " + id)
//     return this.http.get(this.employeesUrl + "/" + id)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }
  
  addPayment (payment: Payment): Observable<Payment> {
    
    //console.log("Payment:" + payment);
    
    let body = JSON.stringify( payment );
    
    //console.log(body);
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    //console.log("before post");

    return this.http.post(this.paymentsUrl, body, options)
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