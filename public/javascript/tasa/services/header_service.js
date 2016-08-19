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
var Subject_1 = require('rxjs/Subject');
var HeaderService = (function () {
    function HeaderService() {
        // Observable string sources
        this.headerSource = new Subject_1.Subject();
        // Observable string streams
        this.header$ = this.headerSource.asObservable();
    }
    // Service message commands
    HeaderService.prototype.setParameters = function (title) {
        this.headerSource.next(title);
    };
    HeaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeaderService);
    return HeaderService;
}());
exports.HeaderService = HeaderService;
//# sourceMappingURL=header_service.js.map