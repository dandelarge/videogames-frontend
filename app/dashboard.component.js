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
var router_1 = require("@angular/router");
var game_service_1 = require("./game.service");
var DashboardComponent = (function () {
    function DashboardComponent(router, gameService) {
        this.router = router;
        this.gameService = gameService;
        this.games = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getGames().then(function (games) { return _this.games = games; });
    };
    DashboardComponent.prototype.gotoDetail = function (game) {
        var link = ['/detail', game.id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.gotoAdd = function () {
        this.router.navigate(['add/']);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, game_service_1.GameService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map