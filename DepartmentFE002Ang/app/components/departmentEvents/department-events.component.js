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
var department_events_list_component_1 = require('./department-events-list.component');
var DepartmentEventsComponent = (function () {
    function DepartmentEventsComponent(router) {
        this.router = router;
        this.title = 'List of Department Events';
    }
    DepartmentEventsComponent.prototype.ngOnInit = function () {
    };
    DepartmentEventsComponent.prototype.gotoDepartmentEventCreate = function () {
        this.router.navigate(['DepartmentEventCreate']);
    };
    DepartmentEventsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/components/departmentEvents/department-events.component.html',
            styleUrls: ['app/components/departmentEvents/department-events.component.css'],
            providers: [
                http_1.HTTP_PROVIDERS
            ],
            directives: [department_events_list_component_1.DepartmentEventsListComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], DepartmentEventsComponent);
    return DepartmentEventsComponent;
}());
exports.DepartmentEventsComponent = DepartmentEventsComponent;
//# sourceMappingURL=department-events.component.js.map