import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { GameDetailsComponent } from '../../game/game-details/game-details.component';
import { GameService, Game } from '../../game/main/game.component';

@Component ({
  selector : 'search-page',
  templateUrl : 'client/search-page/main/search.html',
  styleUrls : ['client/search-page/main/search.css'],
  directives : [GameDetailsComponent],
  providers : [GameService]
})

export class SearchPageComponent {
  public games : Game[];
  public errorMessage : string;

  constructor(private router : Router, private gameService: GameService){
    this.gameService.getGames()
                 .subscribe(
                   heroes => this.games = heroes,
                   error =>  this.errorMessage = <any>error);
  }

  gotoGame(game : Game){
    let link = ['Game', {name : game.name}];
    this.router.navigate(link);
  }
}
