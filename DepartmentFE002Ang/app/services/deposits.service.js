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
var DepositsService = (function () {
    function DepositsService(http) {
        this.http = http;
        this.depositsUrl = 'http://localhost:2184/api/deposits'; // URL to web API
    }
    DepositsService.prototype.getDeposits = function () {
        return this.http.get(this.depositsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DepositsService.prototype.addDeposit = function (deposit) {
        //console.log("Deposit:" + deposit);
        var body = JSON.stringify(deposit);
        //console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        //console.log("before post");
        return this.http.post(this.depositsUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DepositsService.prototype.extractData = function (res) {
        console.log("before body");
        var body = res.json();
        console.log("after body");
        return body || {};
    };
    DepositsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    DepositsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DepositsService);
    return DepositsService;
}());
exports.DepositsService = DepositsService;
//# sourceMappingURL=deposits.service.js.map