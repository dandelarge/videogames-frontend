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
var core_1 = require("@angular/core");
var game_service_1 = require("../shared/game.service");
var videogame_1 = require("../shared/videogame");
var router_1 = require("@angular/router");
var AddGameComponent = (function () {
    function AddGameComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.game = new videogame_1.VideoGame();
        this.game.title = '';
        this.game.case_img = '';
    }
    AddGameComponent.prototype.addGame = function () {
        var _this = this;
        this.gameService.addGame(this.game).subscribe(function (game) {
            _this.game = game;
            _this.router.navigate(['/detail', game.id]);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', videogame_1.VideoGame)
    ], AddGameComponent.prototype, "game", void 0);
    AddGameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-game',
            templateUrl: 'add-game.component.html'
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService, router_1.Router])
    ], AddGameComponent);
    return AddGameComponent;
}());
exports.AddGameComponent = AddGameComponent;
//# sourceMappingURL=add-game.component.js.map