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
//import { Router } from '@angular/router-deprecated';
var getSafeDate_pipe_1 = require('../../pipes/getSafeDate.pipe');
// Add the RxJS Observable operators we need in this app.
require('../../rxjs-operators');
var deposits_service_1 = require('../../services/deposits.service');
var DepositsListComponent = (function () {
    function DepositsListComponent(
        //private router: Router,
        depositsService) {
        this.depositsService = depositsService;
    }
    DepositsListComponent.prototype.getDeposits = function () {
        var _this = this;
        this.depositsService.getDeposits()
            .subscribe(function (deposits) { return _this.initDeposits(deposits); }, function (error) { return _this.errorMessage = error; });
    };
    DepositsListComponent.prototype.initDeposits = function (deposits) {
        this.deposits = deposits;
        this.depositsCount = deposits.length;
    };
    DepositsListComponent.prototype.logMessage = function (value) {
        console.log(value);
    };
    DepositsListComponent.prototype.ngOnInit = function () {
        this.getDeposits();
    };
    DepositsListComponent = __decorate([
        core_1.Component({
            selector: 'deposits-list',
            templateUrl: 'app/components/deposits/deposits-list.component.html',
            styleUrls: ['app/components/deposits/deposits-list.component.css'],
            providers: [
                deposits_service_1.DepositsService, http_1.HTTP_PROVIDERS
            ],
            pipes: [getSafeDate_pipe_1.GetSafeDatePipe]
        }), 
        __metadata('design:paramtypes', [deposits_service_1.DepositsService])
    ], DepositsListComponent);
    return DepositsListComponent;
}());
exports.DepositsListComponent = DepositsListComponent;
//# sourceMappingURL=deposits-list.component.js.map