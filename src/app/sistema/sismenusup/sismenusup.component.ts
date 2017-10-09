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
  selector: 'app-sismenusup',
  templateUrl: './sismenusup.component.html',
  providers: [ApisoftService, AuthService, AngularFireAuth],
  styleUrls: ['./sismenusup.component.css']
})
export class SismenusupComponent implements OnInit {

user: Observable<firebase.User>;
  constructor(public apisoft: ApisoftService, private router: Router, public afAuth: AngularFireAuth, db: AngularFireDatabase, public auth: AuthService) {
        this.user = afAuth.authState;
   }
  email:string;
  password:string;
  dato:any;
  usermenu:boolean = false;

  loaduser:any = function(){
    this.apisoft.getUsuario().then(resp =>{
      this.dato = resp;
    });
  }

   loginemail(){
    this.auth.emailLogin(this.email, this.password);
    setTimeout(()=>{this.loaduser()}, 2000);
  }

  logout(){
    this.router.navigate(['../']);
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
    setTimeout(()=>{this.loaduser()}, 1000);
  }


}
