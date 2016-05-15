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
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var home_component_1 = require('../home/main/home.component');
var game_page_component_1 = require('../game/game-page/game-page.component');
var search_page_component_1 = require('../search-page/main/search-page.component');
var form_component_1 = require('../form/main/form.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'landr-app',
            template: '<router-outlet></router-outlet>',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, home_component_1.HomeComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/home',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: '/search',
                name: 'Search',
                component: search_page_component_1.SearchPageComponent
            },
            {
                path: '/game/:name',
                name: 'Game',
                component: game_page_component_1.GamePageComponent
            },
            {
                path: '/game-form',
                name: 'GameForm',
                component: form_component_1.GameFormComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map