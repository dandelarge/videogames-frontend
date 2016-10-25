import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {GamesComponent} from './games/games.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GameDetailComponent} from './games/game-detail.component';
import {AddGameComponent} from "./games/add-game.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'games',
        component: GamesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: GameDetailComponent
    },
    {
        path: 'add',
        component: AddGameComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule {}