import { Component, Input } from '@angular/core';

import {GameService, Game} from '../main/game.component';

@Component ({
  selector : 'game-details',
  templateUrl : 'client/game/game-details/game-details.html',
  styleUrls : ['client/game/game-details/game-details.css'],
  providers : [GameService]
})

export class GameDetailsComponent{
  @Input()
  game : Game;


}
