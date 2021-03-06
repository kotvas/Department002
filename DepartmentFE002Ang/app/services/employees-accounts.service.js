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
var Observable_1 = require('rxjs/Observable');
var EmployeesAccountsService = (function () {
    function EmployeesAccountsService(http) {
        this.http = http;
        this.employeesAccountsUrl = 'http://localhost:2184/api/EmployeesAccounts'; // URL to web API
    }
    EmployeesAccountsService.prototype.getEmployeesAccounts = function () {
        return this.http.get(this.employeesAccountsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
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
    EmployeesAccountsService.prototype.extractData = function (res) {
        console.log("before body extractData");
        var body = res.json();
        console.log(body);
        console.log("after body extractData");
        return body || {};
    };
    EmployeesAccountsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    EmployeesAccountsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeesAccountsService);
    return EmployeesAccountsService;
}());
exports.EmployeesAccountsService = EmployeesAccountsService;
//# sourceMappingURL=employees-accounts.service.js.map