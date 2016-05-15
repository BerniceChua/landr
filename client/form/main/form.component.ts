import { Component } from '@angular/core';
import { FORM_DIRECTIVES, ControlGroup, Control } from '@angular/common';
import { Response } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { GameService, Game } from '../../game/main/game.component';

@Component ({
  selector : 'game-form',
  templateUrl : 'client/form/main/game-form.html',
  styleUrls : ['client/form/main/game-form.css', 'client/game/game-page/game-page.css'],
  directives : [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  providers : [GameService]
})

export class GameFormComponent {
  public gameForm : Game;
  public game;
  public completed : boolean;

  constructor(private gameService :GameService ){
    this.gameForm = new Game();
    this.completed = false;
  }

  createPage(data){
    if (!data) {return;}
    this.gameService.addGame(data);
    this.game = data;
    }

}
