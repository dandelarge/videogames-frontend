import {Component, OnInit} from '@angular/core';
import {VideoGame} from './videogame';
import {GameService} from "./game.service";

@Component({
    selector: 'app',
    template: `
<h1>{{title}}</h1>
<h2>Games on display</h2>
<ul class="heroes">
    <li *ngFor="let game of games" (click)="onSelect(game)">
        <span class="badge">{{game.id}}</span> {{game.name}}
    </li>
</ul>
<game-detail [game]="selectedGame"></game-detail>
`,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    providers: [GameService]
})
export class AppComponent implements OnInit{
    title = 'Video games Catalogue';
    games: VideoGame[];
    selectedGame: VideoGame;

    constructor(private gameService: GameService) { }

    onSelect(game: VideoGame): void {
        this.selectedGame = game;
    }

    getGames(): void {
        this.gameService.getGames().then(games => this.games = games);
    }

    ngOnInit(): void {
        this.getGames();
    }
}