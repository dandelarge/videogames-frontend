import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {GameDetailComponent} from "./game-detail.component";
import {GamesComponent} from "./games.component";
import {GameService} from "./game.service";
import {DashboardComponent} from "./dashboard.component";
import {RoutesModule} from "./routes.module";
import {HttpModule} from "@angular/http";

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
        DashboardComponent
    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {}

