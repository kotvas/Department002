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
var EmployeesService = (function () {
    function EmployeesService(http) {
        this.http = http;
        this.employeesUrl = 'http://localhost:2184/api/employees'; // URL to web API
    }
    EmployeesService.prototype.getEmployees = function () {
        return this.http.get(this.employeesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeesService.prototype.getEmployee = function (id) {
        return this.http.get(this.employeesUrl + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeesService.prototype.addEmployee = function (employee) {
        var body = JSON.stringify(employee);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.employeesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeesService.prototype.updateEmployee = function (employee) {
        var updateURL = this.employeesUrl + "/" + employee.Id;
        var body = JSON.stringify(employee);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.put(updateURL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeesService.prototype.disableEmployee = function (employeeId) {
        var disableURL = this.employeesUrl + "/disable/" + employeeId;
        console.log('disableEmployee');
        console.log(disableURL);
        return this.http.put(disableURL, "")
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeesService.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    EmployeesService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    EmployeesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeesService);
    return EmployeesService;
}());
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map