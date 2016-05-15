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
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var game_component_1 = require('../../game/main/game.component');
var GameFormComponent = (function () {
    function GameFormComponent(gameService) {
        this.gameService = gameService;
        this.gameForm = new game_component_1.Game();
    }
    GameFormComponent.prototype.createPage = function (data) {
        if (!data) {
            return;
        }
        this.gameService.addGame(data);
    };
    GameFormComponent = __decorate([
        core_1.Component({
            selector: 'game-form',
            templateUrl: 'client/form/main/game-form.html',
            styleUrls: ['client/form/main/game-form.css'],
            directives: [common_1.FORM_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [game_component_1.GameService]
        }), 
        __metadata('design:paramtypes', [game_component_1.GameService])
    ], GameFormComponent);
    return GameFormComponent;
}());
exports.GameFormComponent = GameFormComponent;
//# sourceMappingURL=form.component.js.map