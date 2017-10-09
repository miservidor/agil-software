import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { environment } from '../../environments/environment';

import { SismainComponent } from './sismain/sismain.component';
import { SismenusupComponent } from './sismenusup/sismenusup.component';
import { SismenulatComponent } from './sismenulat/sismenulat.component';
import { RoutingModule} from './sis-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SecondComponent } from './second/second.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StatusComponent } from './status/status.component';
import { ChatComponent } from './chat/chat.component';

import { NumstatusPipe } from '../pipes/numstatus.pipe';

import { HorajsPipe } from '../pipes/horajs.pipe';
import { ChronosComponent } from './chronos/chronos.component';
import { Graph1Component } from './chart/graph1/graph1.component';
import { GraphBarraComponent } from './chart/graph-barra/graph-barra.component';
import { ChartsModule } from 'ng2-charts';
import { ByuserPipe } from '../pipes/byuser.pipe';
import { FilstatusPipe } from '../pipes/filstatus.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule, 
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ChartsModule,
  ],
  declarations: [SismainComponent, 
    SismenusupComponent, 
    SismenulatComponent, 
    FooterComponent, 
    SecondComponent, 
    DashboardComponent, 
    UsersComponent, 
    ClientsComponent, 
    ProjectsComponent,
    NumstatusPipe, 
    TasksComponent, 
    CalendarComponent, 
    StatusComponent, 
    ChatComponent, 
    HorajsPipe, 
    ChronosComponent, 
    Graph1Component, 
    GraphBarraComponent,
    ByuserPipe,
    FilstatusPipe,]
})
export class SistemaModule { }