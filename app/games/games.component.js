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
var game_service_1 = require("../shared/game.service");
var GamesComponent = (function () {
    function GamesComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
    }
    GamesComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getGames().then(function (games) {
            _this.games = games;
        });
    };
    GamesComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    GamesComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/detail', id]);
    };
    GamesComponent.prototype.deleteGame = function (id) {
        var _this = this;
        this.gameService.removeGame(id).subscribe(function (response) { return _this.getGames(); });
    };
    GamesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'games',
            templateUrl: 'games.component.html'
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService, router_1.Router])
    ], GamesComponent);
    return GamesComponent;
}());
exports.GamesComponent = GamesComponent;
//# sourceMappingURL=games.component.js.map