import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Expense } from '../entities/expense';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpensesService {
  constructor (private http: Http) {}
  
  private expensesUrl = 'http://localhost:2184/api/expenses';  // URL to web API
  
  getExpenses (): Observable<Expense[]> {
    return this.http.get(this.expensesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  generateExpensesForEvent(eventId: string)
  {
    let generateExpensesForEventUrl = this.expensesUrl + "/ForEvent/" + eventId;

    return this.http.post(generateExpensesForEventUrl, "")
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