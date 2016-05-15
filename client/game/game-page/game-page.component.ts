import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { GameService, Game } from '../main/game.component';

@Component ({
  selector : 'game-page',
  templateUrl : 'client/game/game-page/game-page.html',
  styleUrls : ['client/game/game-page/game-page.css'],
  providers : [GameService]
})

export class GamePageComponent implements OnInit{
  public game : Game;
  public errorMessage : string;

  constructor(private gameService: GameService, private routeParams: RouteParams) {
    let name = this.routeParams.get('name');
    this.gameService.getGame(name)
                 .subscribe(
                   heroes => this.game = heroes,
                   error =>  this.errorMessage = <any>error);
  }

  ngOnInit(){

  }

  goBack() {
    window.history.back();
  }
}
