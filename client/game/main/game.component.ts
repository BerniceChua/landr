import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Component ({
  selector : 'game',
  templateUrl : 'client/game/main/game.html',
  styleUrls : ['client/game/main/game.css'],

})

@Injectable()
export class GameService {
  private gameUrl : string;

  constructor(private http : Http){
    this.gameUrl = '/game';
  }

  getGame(name : string) : Observable<Game>{
    return this.http.get(this.gameUrl + ':' + name)
                    .map(this.extractData)
                    .catch(this.handleError);
  };

  getGames() : Observable<Game[]>{
    return this.http.get(this.gameUrl + ':' + name)
                    .map(this.extractData)
                    .catch(this.handleError);
  };

  addGame(game: Game): Observable<Game> {
    let body = JSON.stringify({ game });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.gameUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


export class Game {
  name : string
}

export class GameComponent {
  constructor(){}


}
