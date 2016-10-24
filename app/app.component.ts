import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/games">Games</a>
   </nav>
   <router-outlet></router-outlet>
   `
})
export class AppComponent {
    title = "Games Catalogue!"
}