import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";

import {RoutesModule} from "./routes.module";

import {AppComponent} from './app.component';
import {GameService} from "./shared/game.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GameDetailComponent} from "./games/game-detail.component";
import {GamesComponent} from "./games/games.component";
import {AddGameComponent} from "./games/add-game.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RoutesModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        GamesComponent,
        GameDetailComponent,
        DashboardComponent,
        AddGameComponent
    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {}

