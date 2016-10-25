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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var app_component_1 = require('./app.component');
var game_detail_component_1 = require("./game-detail.component");
var games_component_1 = require("./games.component");
var game_service_1 = require("./game.service");
var dashboard_component_1 = require("./dashboard.component");
var routes_module_1 = require("./routes.module");
var add_game_component_1 = require("./add-game.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                routes_module_1.RoutesModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                games_component_1.GamesComponent,
                game_detail_component_1.GameDetailComponent,
                dashboard_component_1.DashboardComponent,
                add_game_component_1.AddGameComponent
            ],
            providers: [game_service_1.GameService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map