import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {ScrollToModule} from 'ng2-scroll-to';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './index/main/main.component';
import { FooterComponent } from './index/footer/footer.component';
import { MenusupComponent } from './index/menusup/menusup.component';
import { LoginComponent } from './index/login/login.component';
import {RoutingModule} from './routing.module';

import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import 'hammerjs';


import { FechaPipe } from './pipes/fecha.pipe';
import { DatesPipe } from './pipes/dates.pipe';
import { AktivtagPipe } from './pipes/aktivtag.pipe';
import { NourlComponent } from './nourl/nourl.component';
import { RegisterComponent } from './index/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MainComponent,
    FooterComponent,
    MenusupComponent,
    LoginComponent,
    FechaPipe,
    DatesPipe,
    AktivtagPipe,
    NourlComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RoutingModule,
    ScrollToModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
