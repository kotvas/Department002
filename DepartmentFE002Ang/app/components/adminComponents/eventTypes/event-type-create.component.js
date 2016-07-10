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
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
// Add the RxJS Observable operators we need in this app.
require('../../../rxjs-operators');
var eventType_1 = require('../../../entities/adminEntities/eventType');
var admin_service_1 = require('../../../services/admin.service');
var EventTypeCreateComponent = (function () {
    function EventTypeCreateComponent(adminService, routeParams) {
        this.adminService = adminService;
        this.routeParams = routeParams;
        this.title = 'Add New Event Type';
        this.eventType = new eventType_1.EventType();
    }
    EventTypeCreateComponent.prototype.getEventTypes = function () {
        var _this = this;
        this.adminService.getEventTypes()
            .subscribe(function (eventTypes) { return _this.eventTypes = eventTypes; }, function (error) { return _this.errorMessage = error; });
    };
    EventTypeCreateComponent.prototype.ngOnInit = function () {
        this.getEventTypes();
    };
    EventTypeCreateComponent.prototype.addEventType = function (newEventType) {
        var _this = this;
        if (!newEventType.Title) {
            return;
        }
        this.adminService.addEventType(newEventType)
            .subscribe(function (employee) { return _this.eventTypes.push(newEventType); }, function (error) { return _this.errorMessage = error; });
        this.getEventTypes();
        window.history.back();
    };
    EventTypeCreateComponent.prototype.goBack = function () {
        window.history.back();
    };
    EventTypeCreateComponent = __decorate([
        core_1.Component({
            //selector: 'employee-detail',
            templateUrl: 'app/components/adminComponents/eventTypes/event-type-create.component.html',
            styleUrls: ['app/components/adminComponents/eventTypes/event-type-create.component.css'],
            providers: [
                admin_service_1.AdminService, http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, router_deprecated_1.RouteParams])
    ], EventTypeCreateComponent);
    return EventTypeCreateComponent;
}());
exports.EventTypeCreateComponent = EventTypeCreateComponent;
//# sourceMappingURL=event-type-create.component.js.map