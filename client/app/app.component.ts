import {Component} from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';

import { HomeComponent } from '../home/main/home.component';
import { GamePageComponent } from '../game/game-page/game-page.component';
import { SearchPageComponent } from '../search-page/main/search-page.component';


@Component({
  selector : 'landr-app',
  template : '<router-outlet></router-outlet>',
  directives : [ROUTER_DIRECTIVES, HomeComponent],
  providers : [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})


@RouteConfig([
  {
    path : '/home',
    name : 'Home',
    component : HomeComponent,
    useAsDefault : true
  },
  {
    path : '/search',
    name : 'Search',
    component : SearchPageComponent
  },
  {
    path : '/game/:name',
    name : 'Game',
    component : GamePageComponent
  }
])

export class AppComponent{
  title : 'Landr';

}
