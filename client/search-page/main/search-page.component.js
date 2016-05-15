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
var game_details_component_1 = require('../../game/game-details/game-details.component');
var game_component_1 = require('../../game/main/game.component');
var SearchPageComponent = (function () {
    function SearchPageComponent(router, gameService) {
        var _this = this;
        this.router = router;
        this.gameService = gameService;
        this.gameService.getGames()
            .subscribe(function (heroes) { return _this.games = heroes; }, function (error) { return _this.errorMessage = error; });
    }
    SearchPageComponent.prototype.gotoGame = function (game) {
        var link = ['Game', { name: game.name }];
        this.router.navigate(link);
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            selector: 'search-page',
            templateUrl: 'client/search-page/main/search.html',
            styleUrls: ['client/search-page/main/search.css'],
            directives: [game_details_component_1.GameDetailsComponent],
            providers: [game_component_1.GameService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, game_component_1.GameService])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search-page.component.js.map