import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {VideoGame} from '../shared/videogame';
import {GameService} from "../shared/game.service";

@Component({
    moduleId: module.id,
    selector: 'games',
    templateUrl: 'games.component.html'
})
export class GamesComponent implements OnInit{
    games: VideoGame[];

    constructor(private gameService: GameService, private router: Router) { }


    getGames(): void {
        this.gameService.getGames().then(games =>
        {
            this.games = games;
        });
    }

    ngOnInit(): void {
        this.getGames();
    }

    gotoDetail(id: number): void {
        this.router.navigate(['/detail', id]);
    }

    deleteGame(id: number): void {
        this.gameService.removeGame(id).subscribe(
            response => this.getGames()
        );
    }
}
