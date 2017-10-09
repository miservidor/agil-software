import { Component, OnInit, Output, HostBinding, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  selector: 'app-login',
  templateUrl: './login.component.html',
    providers: [ApisoftService, AuthService, AngularFireAuth],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

user: Observable<firebase.User>;
  constructor(
    public apisoft: ApisoftService, 
    public afAuth: AngularFireAuth, 
    db: AngularFireDatabase, 
    public auth: AuthService,
    public router: Router
    ) {
        this.user = afAuth.authState;
   }

     onClick() {
    this.notify.emit('Click from nested component');
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

  clearform(){
    this.email = '';
    this.password = '';
  }

  loginok(){
      this.clearform();
      this.router.navigate(['./sistema']);
  }

   loginemail(){
    this.auth.emailLogin(this.email, this.password);
    setTimeout(()=>{this.loginok()}, 2000);
  }

  logout(){
     this.afAuth.auth.signOut();
  }

  ngOnInit() {
    setTimeout(()=>{this.loaduser()}, 1000);
  }

}
