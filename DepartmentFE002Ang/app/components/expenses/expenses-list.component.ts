import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { Expense } from '../../entities/expense';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'expenses-list',
  templateUrl: 'app/components/expenses/expenses-list.component.html',
  styleUrls:  ['app/components/expenses/expenses-list.component.css'],
  providers: [
    ExpensesService, HTTP_PROVIDERS
  ]
})

export class ExpensesListComponent implements OnInit {
    
    errorMessage: string;
    expenses: Expense[];
    expensesCount: number;
    
    constructor(
        private expensesService: ExpensesService) {   
    }
    
    getExpenses() {
        this.expensesService.getExpenses()
                        .subscribe(
                        expenses => this.initExpenses(expenses),
                        error =>  this.errorMessage = <any>error);
    }
    
    initExpenses(expenses) {
        this.expenses = expenses;
        this.expensesCount = expenses.length;
    }
    
    logMessage(value) {
        console.log(value);
    }
     
    ngOnInit() {
        this.getExpenses();
    }
}