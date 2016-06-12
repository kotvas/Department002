import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

//import { Payment } from '../../entities/payment';
//import { PaymentsService } from '../../services/payments.service';
import { PaymentsListComponent} from './payments-list.component';

import { HelpersComponent} from '../../shared/helpers.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/payments/payments.component.html',
  styleUrls:  ['app/components/payments/payments.component.css'],
  providers: [
    HTTP_PROVIDERS, HelpersComponent//, PaymentsService
  ],
  directives:[PaymentsListComponent]
})

export class PaymentsComponent implements OnInit {
    title = 'List of Payments';
        
    errorMessage: string;
    //payments: Payment[];
    //sortedPayments: Payment[];
    //paymentsCount: number;
    
    constructor(
        private router: Router,
        //private paymentService: PaymentsService,
        private helpersComponent: HelpersComponent) {   
    }
    
    // getPayments() {
    //     this.paymentService.getPayments()
    //                     .subscribe(
    //                     payments => this.payments = payments,
    //                     error =>  this.errorMessage = <any>error);
                        
    //     //  this.sortedPayments = this.payments.sort((p1,p2) => {
    //     //     if (p1.Date > p2.Date) {
    //     //         return 1;
    //     //     }

    //     //     if (p1.Date < p2.Date) {
    //     //         return -1;
    //     //     }

    //     //     return 0;
    //     // });               
    // }
    
    // convertDate(oldDate: string) {
    //   let newDate = new Date(oldDate);
    //   //console.log(newDate);
    //   return newDate;
    // }
    
     
    ngOnInit() {
        //this.getPayments();
    }
    
    // gotoEmployeeDetail(employee: Employee) {
    //     this.router.navigate(['EmployeeDetail', { id: employee.Id }]);
    // }
    
    gotoPaymentCreate() {
        this.router.navigate(['PaymentCreate'])
    }
}