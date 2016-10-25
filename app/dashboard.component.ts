import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {VideoGame} from "./videogame";
import {GameService} from "./game.service";

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    games: VideoGame[] = [];

    constructor(
        private router: Router,
        private gameService: GameService
    ) { }

    ngOnInit(): void {
        this.gameService.getGames().then(games => this.games = games);
    }

    gotoDetail(game: VideoGame): void {
        let link = ['/detail', game.id];
        this.router.navigate(link);
    }

    gotoAdd(): void {
        this.router.navigate(['add/']);
    }
}