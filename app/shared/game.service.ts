import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";

import {VideoGame} from "./videogame";
import {Observable} from "rxjs";

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class GameService {
    private url: String = 'http://localhost:8080/api/';

    constructor(
        private http: Http
    ) {}

    private handleError (error: any): void {
        console.log(error);
    }

    getGames(): Promise<VideoGame[]> {
        return this.http.get(this.url + 'games/').toPromise()
            .then(response => response.json() as VideoGame[])
            .catch(this.handleError);
    }

    getGame(id: Number): Promise<VideoGame> {
        return this.http.get(this.url + 'games/' + id).toPromise()
            .then(response => response.json() as VideoGame)
            .catch(this.handleError);
    }

    addGame(game: VideoGame): Observable<VideoGame> {
        return this.http.post(this.url + 'games', {
            title: game.title,
            case_img: game.case_img
        }).map((response: Response) => response.json() as VideoGame);
    }

    removeGame(id: Number): Observable<Response> {
        return this.http.delete(this.url + 'games/' + id);
    }

    updateGame(game: VideoGame): Observable<VideoGame> {
        return this.http.put(this.url + 'games/' + game.id, {
            id: game.id,
            title: game.title,
            case_img: game.case_img
        }).map((response: Response) => response.json() as VideoGame);
    }
}