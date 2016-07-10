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
var DepartmentEventsService = (function () {
    function DepartmentEventsService(http) {
        this.http = http;
        this.departmentEventsUrl = 'http://localhost:2184/api/departmentEvents'; // URL to web API
    }
    DepartmentEventsService.prototype.getDepartmentEvents = function () {
        return this.http.get(this.departmentEventsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DepartmentEventsService.prototype.addDepartmentEvent = function (departmentEvent) {
        //console.log("Event:" + event);
        var body = JSON.stringify(departmentEvent);
        //console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        //console.log("before post");
        return this.http.post(this.departmentEventsUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DepartmentEventsService.prototype.extractData = function (res) {
        console.log("before body");
        var body = res.json();
        console.log("after body");
        return body || {};
    };
    DepartmentEventsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    DepartmentEventsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DepartmentEventsService);
    return DepartmentEventsService;
}());
exports.DepartmentEventsService = DepartmentEventsService;
//# sourceMappingURL=department-events.service.js.map