import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../../services/auth.service';
import {ApisoftService} from '../../services/apisoft.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
    providers: [AuthService, ApisoftService],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;
  name:string;
  typeuser:string ='creator';
  company:string = '';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  estadouser:any;
  constructor(public afAuth: AngularFireAuth, private router: Router, db: AngularFireDatabase, public auth: AuthService, public apisoft:ApisoftService) {
    this.user = afAuth.authState;
    this.items = db.list('/projects');
    
  }

  registraremail(){
    this.auth.emailSignUp(this.email, this.password).then((res)=>{
      console.log(res.uid);
      console.log('respuesta del registro');
      var pak = {
        'company': this.company,
        'nombreuser': this.name,
        'email': res.email,
        'rol': this.typeuser
      }
      this.completarcuenta(res.uid,pak)
    })
  }

  completarcuenta(id,obj){
    this.apisoft.FillUser(id,obj).then(()=>{
      console.log('ready');
      this.router.navigate(['./sistema']);
    });
  }

  ngOnInit() {
  }

}
