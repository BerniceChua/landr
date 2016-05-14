import { Component } from '@angular/core';

import { GameDetailsComponent } from '../../game/game-details/game-details';

@Component ({
  selector : 'search-page',
  templateUrl : 'client/search-page/main/search.html',
  styleUrls : ['client/search-page/main/search.css'],
  directives : [GameDetailsComponent]
})

export class SearchPageComponent {}
