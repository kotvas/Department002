import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { Payment } from '../../entities/payment';
import { PaymentsService } from '../../services/payments.service';

import { HelpersComponent} from '../../shared/helpers.component';

@Component({
  selector: 'payments-list',
  templateUrl: 'app/components/payments/payments-list.component.html',
  styleUrls:  ['app/components/payments/payments-list.component.css'],
  providers: [
    PaymentsService, HTTP_PROVIDERS, HelpersComponent
  ]
})

export class PaymentsListComponent implements OnInit {
    //title = 'List of Payments';
        
    errorMessage: string;
    payments: Payment[];
    //sortedPayments: Payment[];
    paymentsCount: number;
    
    constructor(
        //private router: Router,
        private paymentService: PaymentsService,
        private helpersComponent: HelpersComponent) {   
    }
    
    getPayments() {
        this.paymentService.getPayments()
                        .subscribe(
                        payments => this.initPayments(payments),
                        error =>  this.errorMessage = <any>error);
    }
    
    initPayments(payments) {
        this.payments = payments;
        this.paymentsCount = payments.length;
    }
    
    logMessage(value) {
        console.log(value);
    }
     
    ngOnInit() {
        this.getPayments();
    }
}