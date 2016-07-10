import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { ExpensesListComponent} from './expenses-list.component';

@Component({
  templateUrl: 'app/components/expenses/expenses.component.html',
  styleUrls:  ['app/components/expenses/expenses.component.css'],
  providers: [
    HTTP_PROVIDERS
  ],
  directives:[ExpensesListComponent]
})

export class ExpensesComponent implements OnInit {
    title = 'Expenses';
    
    constructor(
        private router: Router) {   
    }
    
    ngOnInit() {
    }
    
}