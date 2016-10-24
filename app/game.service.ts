import {Injectable} from '@angular/core';
import {VideoGame} from "./videogame";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'

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
        return this.http.get(this.url + 'games').toPromise()
            .then(response => response.json() as VideoGame[])
            .catch(this.handleError);
    }

    getGame(id: Number): Promise<VideoGame> {
        return this.http.get(this.url + 'games/' + id).toPromise()
            .then(response => response.json() as VideoGame)
            .catch(this.handleError);
    }
}