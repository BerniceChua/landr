import { Component } from '@angular/core';
import { FORM_DIRECTIVES, ControlGroup, Control } from '@angular/common';
import { Response } from '@angular/http';

import { GameService, Game } from '../../game/main/game.component';

@Component ({
  selector : 'game-form',
  templateUrl : 'client/form/main/game-form.html',
  styleUrls : ['client/form/main/game-form.css'],
  directives : [FORM_DIRECTIVES],
  providers : [GameService]
})

export class GameFormComponent {
  public gameForm : Game;

  constructor(private gameService :GameService ){
    this.gameForm = new Game();
  }

  createPage(data){
    if (!data) {return;}
    this.gameService.addGame(data)
    }

}
