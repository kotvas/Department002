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
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var PaymentsService = (function () {
    function PaymentsService(http) {
        this.http = http;
        this.paymentsUrl = 'http://localhost:2184/api/payments'; // URL to web API
    }
    PaymentsService.prototype.getPayments = function () {
        return this.http.get(this.paymentsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //   getEmployee (id: string): Observable<Employee> {
    //     console.log("employee id: " + id)
    //     return this.http.get(this.employeesUrl + "/" + id)
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    //   }
    PaymentsService.prototype.addPayment = function (payment) {
        //console.log("Payment:" + payment);
        var body = JSON.stringify(payment);
        //console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        //console.log("before post");
        return this.http.post(this.paymentsUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PaymentsService.prototype.extractData = function (res) {
        console.log("before body");
        var body = res.json();
        console.log("after body");
        return body || {};
    };
    PaymentsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    PaymentsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PaymentsService);
    return PaymentsService;
}());
exports.PaymentsService = PaymentsService;
//# sourceMappingURL=payments.service.js.map