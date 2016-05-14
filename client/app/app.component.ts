import {Component} from "@angular/core";

import { HomeComponent } from '../home/main/home.component';
import { SearchPageComponent } from '../search-page/main/search-page.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector : 'landr-app',
  template : '<router-outlet></router-outlet>',
  directives : [ROUTER_DIRECTIVES, HomeComponent],
  providers : [ROUTER_PROVIDERS]
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
  }
])

export class AppComponent{
  title : 'Landr';

}
