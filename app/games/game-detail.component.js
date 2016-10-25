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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var videogame_1 = require("../shared/videogame");
var game_service_1 = require("../shared/game.service");
var GameDetailComponent = (function () {
    function GameDetailComponent(gameService, route, location) {
        this.gameService = gameService;
        this.route = route;
        this.location = location;
    }
    GameDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.gameService.getGame(id).then(function (game) { return _this.game = game; });
        });
    };
    GameDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', videogame_1.VideoGame)
    ], GameDetailComponent.prototype, "game", void 0);
    GameDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'game-detail',
            templateUrl: 'game-detail.component.html'
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService, router_1.ActivatedRoute, common_1.Location])
    ], GameDetailComponent);
    return GameDetailComponent;
}());
exports.GameDetailComponent = GameDetailComponent;
//# sourceMappingURL=game-detail.component.js.map