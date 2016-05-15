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
var game_component_1 = require('../main/game.component');
var GameDetailsComponent = (function () {
    function GameDetailsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', game_component_1.Game)
    ], GameDetailsComponent.prototype, "game", void 0);
    GameDetailsComponent = __decorate([
        core_1.Component({
            selector: 'game-details',
            templateUrl: 'client/game/game-details/game-details.html',
            styleUrls: ['client/game/game-details/game-details.css'],
            providers: [game_component_1.GameService]
        }), 
        __metadata('design:paramtypes', [])
    ], GameDetailsComponent);
    return GameDetailsComponent;
}());
exports.GameDetailsComponent = GameDetailsComponent;
//# sourceMappingURL=game-details.component.js.map