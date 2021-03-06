import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common'

import {VideoGame} from "../shared/videogame";
import {GameService} from "../shared/game.service";


@Component({
    moduleId: module.id,
    selector: 'game-detail',
    templateUrl: 'game-detail.component.html'
})
export class GameDetailComponent implements OnInit{
    @Input()
    game: VideoGame;

    constructor(
        private gameService: GameService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.gameService.getGame(id).then( game => this.game = game);
        });
    }

    goBack(): void {
        this.location.back();
    }

    updateGame(game: VideoGame): void {
        this.gameService.updateGame(game).subscribe(
             res => this.router.navigate(['dashboard'])
        );
    }

}
