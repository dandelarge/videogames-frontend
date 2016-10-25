import {Component, Input} from "@angular/core";
import {GameService} from "../shared/game.service";
import {VideoGame} from "../shared/videogame";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'add-game',
    templateUrl: 'add-game.component.html'
})
export class AddGameComponent {
    @Input()
    game: VideoGame = new VideoGame();

    constructor(
        private gameService: GameService,
        private router: Router
    ) {
        this.game.title = '';
        this.game.case_img = '';
    }

    addGame(): void{
        this.gameService.addGame(this.game).subscribe( game => {
            this.game = game;
            this.router.navigate(['/detail', game.id]);
        });
    }
}