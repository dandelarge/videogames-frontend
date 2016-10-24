import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {GamesComponent} from './games.component';
import {DashboardComponent} from './dashboard.component';
import {GameDetailComponent} from './game-detail.component';


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
        }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule {}