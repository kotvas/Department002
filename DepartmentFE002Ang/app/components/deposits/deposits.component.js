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
var deposits_list_component_1 = require('./deposits-list.component');
var DepositsComponent = (function () {
    function DepositsComponent(router) {
        this.router = router;
        this.title = 'List of Deposits';
    }
    DepositsComponent.prototype.ngOnInit = function () {
    };
    DepositsComponent.prototype.gotoDepositCreate = function () {
        this.router.navigate(['DepositCreate']);
    };
    DepositsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/components/deposits/deposits.component.html',
            styleUrls: ['app/components/deposits/deposits.component.css'],
            providers: [
                http_1.HTTP_PROVIDERS
            ],
            directives: [deposits_list_component_1.DepositsListComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], DepositsComponent);
    return DepositsComponent;
}());
exports.DepositsComponent = DepositsComponent;
//# sourceMappingURL=deposits.component.js.map