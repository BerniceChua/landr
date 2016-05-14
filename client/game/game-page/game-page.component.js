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
var game_component_1 = require('../main/game.component');
var GamePageComponent = (function () {
    function GamePageComponent(gameService, routeParams) {
        var _this = this;
        this.gameService = gameService;
        this.routeParams = routeParams;
        var name = this.routeParams.get('name');
        this.gameService.getGame(name)
            .subscribe(function (heroes) { return _this.game = heroes; }, function (error) { return _this.errorMessage = error; });
    }
    GamePageComponent.prototype.ngOnInit = function () {
    };
    GamePageComponent.prototype.goBack = function () {
        window.history.back();
    };
    GamePageComponent = __decorate([
        core_1.Component({
            selector: 'game-page',
            templateUrl: 'client/game/game-page/game-page.html',
            styleUrls: ['client/game/game-page/game-page.css'],
            providers: [game_component_1.GameService]
        }), 
        __metadata('design:paramtypes', [game_component_1.GameService, router_deprecated_1.RouteParams])
    ], GamePageComponent);
    return GamePageComponent;
}());
exports.GamePageComponent = GamePageComponent;
//# sourceMappingURL=game-page.component.js.map