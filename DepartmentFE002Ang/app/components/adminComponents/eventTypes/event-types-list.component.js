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
// Add the RxJS Observable operators we need in this app.
require('../../../rxjs-operators');
var admin_service_1 = require('../../../services/admin.service');
var EventTypesListComponent = (function () {
    function EventTypesListComponent(adminService) {
        this.adminService = adminService;
    }
    EventTypesListComponent.prototype.getEventTypes = function () {
        var _this = this;
        this.adminService.getEventTypes()
            .subscribe(function (eventTypes) { return _this.initEventTypes(eventTypes); }, function (error) { return _this.errorMessage = error; });
    };
    EventTypesListComponent.prototype.initEventTypes = function (eventTypes) {
        this.eventTypes = eventTypes;
        console.log("collection: " + eventTypes.length);
    };
    EventTypesListComponent.prototype.ngOnInit = function () {
        this.getEventTypes();
    };
    EventTypesListComponent.prototype.deleteEventType = function (value) {
        var _this = this;
        this.adminService.disableEventType(value)
            .subscribe(function (res) { _this.getEventTypes(); });
    };
    EventTypesListComponent = __decorate([
        core_1.Component({
            selector: 'event-types-list',
            templateUrl: 'app/components/adminComponents/eventTypes/event-types-list.component.html',
            styleUrls: ['app/components/adminComponents/eventTypes/event-types-list.component.css'],
            providers: [
                admin_service_1.AdminService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], EventTypesListComponent);
    return EventTypesListComponent;
}());
exports.EventTypesListComponent = EventTypesListComponent;
//# sourceMappingURL=event-types-list.component.js.map