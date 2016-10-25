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
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var GameService = (function () {
    function GameService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/';
    }
    GameService.prototype.handleError = function (error) {
        console.log(error);
    };
    GameService.prototype.getGames = function () {
        return this.http.get(this.url + 'games/').toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GameService.prototype.getGame = function (id) {
        return this.http.get(this.url + 'games/' + id).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GameService.prototype.addGame = function (game) {
        return this.http.post(this.url + 'games', {
            title: game.title,
            case_img: game.case_img
        }).map(function (response) { return response.json(); });
    };
    GameService.prototype.removeGame = function (id) {
        return this.http.delete(this.url + 'games/' + id);
    };
    GameService.prototype.updateGame = function (game) {
        return this.http.put(this.url + 'games/' + game.id, {
            id: game.id,
            title: game.title,
            case_img: game.case_img
        }).map(function (response) { return response.json(); });
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map