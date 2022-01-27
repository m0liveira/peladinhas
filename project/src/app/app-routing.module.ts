import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { HostComponent } from './components/join/host/host.component';
import { PlayerComponent } from './components/join/player/player.component';
import { SearchComponent } from './components/search/search.component';
import { PlayerEvalComponent } from './components/eval/player-eval/player-eval.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  { path: 'Home', component: HomeComponent },
  { path: 'Auth', component: AuthenticateComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'jPlayer', component: PlayerComponent },
  { path: 'jHost', component: HostComponent },
  { path: 'playerEval', component: PlayerEvalComponent },
  { path: 'Error', component: ErrorComponent },
  { path: '**', redirectTo: 'Error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
