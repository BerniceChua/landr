import {Component} from "@angular/core";

import { HomePageComponent } from '../home/main/home.component';

@Component({
  selector : 'landr-app',
  //template : '<h1>Hello</h1>',
  template : '<home-page></home-page>',
  directives : [HomePageComponent]
})

export class AppComponent{
  title : 'Landr';

}
