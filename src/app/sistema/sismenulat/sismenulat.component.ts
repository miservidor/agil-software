import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../../services/auth.service';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';

import {ApisoftService} from '../../services/apisoft.service';

@Component({
  selector: 'app-sismenulat',
  templateUrl: './sismenulat.component.html',
  providers: [ApisoftService, AuthService],
  styleUrls: ['./sismenulat.component.css']
})
export class SismenulatComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  mainbut:any = 'dashboard';
  mainmenu:any = 'home';
  menuexpand:boolean = true;
  
  logout() {
     this.afAuth.auth.signOut();
  }

    isAuth() {
      this.afAuth.auth.currentUser.email;
  }
  ngOnInit() {
  }


}


