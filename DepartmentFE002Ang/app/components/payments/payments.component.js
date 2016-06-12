"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
// Add the RxJS Observable operators we need in this app.
require('../../rxjs-operators');
//import { Payment } from '../../entities/payment';
//import { PaymentsService } from '../../services/payments.service';
var payments_list_component_1 = require('./payments-list.component');
var helpers_component_1 = require('../../shared/helpers.component');
var PaymentsComponent = (function () {
    //payments: Payment[];
    //sortedPayments: Payment[];
    //paymentsCount: number;
    function PaymentsComponent(router, 
        //private paymentService: PaymentsService,
        helpersComponent) {
        this.router = router;
        this.helpersComponent = helpersComponent;
        this.title = 'List of Payments';
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
    PaymentsComponent.prototype.ngOnInit = function () {
        //this.getPayments();
    };
    // gotoEmployeeDetail(employee: Employee) {
    //     this.router.navigate(['EmployeeDetail', { id: employee.Id }]);
    // }
    PaymentsComponent.prototype.gotoPaymentCreate = function () {
        this.router.navigate(['PaymentCreate']);
    };
    PaymentsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/components/payments/payments.component.html',
            styleUrls: ['app/components/payments/payments.component.css'],
            providers: [
                http_1.HTTP_PROVIDERS, helpers_component_1.HelpersComponent //, PaymentsService
            ],
            directives: [payments_list_component_1.PaymentsListComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, helpers_component_1.HelpersComponent])
    ], PaymentsComponent);
    return PaymentsComponent;
}());
exports.PaymentsComponent = PaymentsComponent;
//# sourceMappingURL=payments.component.js.map