import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './index/main/main.component';
import { NourlComponent } from './nourl/nourl.component';

import { AuthGuardService } from './services/auth-guard.service';
import {AuthlogService} from './services/authlog.service';

export const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'main', component: MainComponent },
  { path: 'nourl', component: NourlComponent},
  { path: 'sistema', loadChildren: './sistema/sistema.module#SistemaModule',
  canActivate: [AuthGuardService] },
  { path: '**', component: NourlComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  providers:[AuthGuardService, AuthlogService],
  exports:[RouterModule]
})
export class RoutingModule { }
