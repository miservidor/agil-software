import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { SismainComponent } from './sismain/sismain.component';
import { SismenusupComponent } from './sismenusup/sismenusup.component';
import { SismenulatComponent } from './sismenulat/sismenulat.component';
import { SecondComponent } from './second/second.component';
import {UsersComponent} from './users/users.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StatusComponent } from './status/status.component';


export const sisRoutes: Routes = [
  { path: '', 
    component: SismainComponent,
    children:[
        {path: '', component: DashboardComponent},      
        {path: 'second', component: SecondComponent},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'users', component: UsersComponent},
        {path: 'clients', component: ClientsComponent},
        {path: 'projects', component: ProjectsComponent},
        {path: 'tasks', component: TasksComponent},
        {path: 'calendar', component: CalendarComponent},
        {path: 'status', component: StatusComponent}
    ]},
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sisRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }