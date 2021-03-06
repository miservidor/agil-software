import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class ApisoftService {
    logeduser: Observable<firebase.User>;
    users: FirebaseListObservable<any[]>;
    user: FirebaseObjectObservable<any>;
    preusers: FirebaseListObservable<any[]>;
    preuser: FirebaseObjectObservable<any>;
    items: FirebaseListObservable<any[]>;
    item: FirebaseObjectObservable<any>;
    chats: FirebaseListObservable<any[]>;
    chat: FirebaseObjectObservable<any>;
    projects: FirebaseListObservable<any[]>;
    project: FirebaseObjectObservable<any>;
    tasks: FirebaseListObservable<any[]>;
    task: FirebaseObjectObservable<any>;
    clients: FirebaseListObservable<any[]>;
    client: FirebaseObjectObservable<any>;
    usuario: FirebaseObjectObservable<any>;
    uiduser:string;

    constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
      afAuth.authState.subscribe(
        info=>{if(info){
        this.uiduser = info.uid;
        console.log(this.uiduser)} else
        {this.uiduser =''};
    
      this.users= db.list('/group/'+this.uiduser+'/userauths');
      this.user = db.object('/group/'+this.uiduser+'/userauths');

      this.items = db.list('/group/'+this.uiduser+'/users');
      this.item = db.object('/group/'+this.uiduser+'/users');
      this.projects = db.list('/projects');
      this.project = db.object('/projects');
      this.tasks = db.list('/group/'+this.uiduser+'/tasks');
      this.task = db.object('/group/'+this.uiduser+'/tasks');
      this.clients = db.list('/group/'+this.uiduser+'/clients');
      this.client = db.object('/group/'+this.uiduser+'/clients');
      this.usuario = db.object('/users/'+this.uiduser);
      this.chats= db.list('/group/'+this.uiduser+'/chats');
      this.chat= db.object('/group/'+this.uiduser+'/chats');
      })
      //'/group/'+this.logeduser+
      }

    idsoft:any;
    softname:any;
    beschreibung:any;
    datumst:any;
    aktiv:boolean;

    idcli:any;
    namecli:any;
    addresscli:any;
    citycli:any;
    phonecli:any;
    statuscli:any;

Llamado:any = function (){
  console.log('alo alo!');
}

removeuser:any = function(clave){
this.users.remove(clave);
}

removeproject:any = function(clave){
this.projects.remove(clave);
}


NewUser:any = function(obj){
  var UserObject = {
    'name': obj.name,
    'email': obj.email,
    'code': obj.code,
    'group': obj.group
    }
  console.log(obj);
  this.users.push(obj);
}

ActualUser:any = function(){
  return Promise.resolve(this.uiduser);
}

FillUser:any = function(newid, obj){
    this.preusers =  this.db.list('/users/'+newid);
    this.preuser =  this.db.object('/users/'+newid);
    this.preuser.set(obj);
    this.FoundProject();
    return Promise.resolve();
}

FoundProject:any = function(aa){
  var usernow = this.uiduser;
  var nest = {
    'rol': 'admin'};
  var newproj ={
    'codpro':'AT1',
    'descpro': 'editar descripcion del proyecto',
    'namepro': 'Nuevo Proyecto',
    'statuspro': 'activo',
    'users':[]};
  newproj.users[this.uiduser] = nest;
  console.log('creo projecto?');
  console.log(newproj);
    this.projects.push(newproj).then(res=>console.log(res));
}

/* CHAT */
getChats:any = function(){
return Promise.resolve(this.chats);
}

newChat:any = function(obj){
  this.chats.push(obj);
  return Promise.resolve();
}

getUsers:any = function(){
return Promise.resolve(this.users);  
}

NewClient:any = function(obj){
  var ClientObject = {
    'idcli':obj.idcli,
    'namecli':obj.namecli,
    'addresscli':obj.addresscli,
    'citycli':obj.citycli,
    'phonecli':obj.phonecli,
    'statuscli':obj.statuscli
  }
  this.clients.push(ClientObject);
  return Promise.resolve();

}

getClient:any = function(){
return Promise.resolve(this.clients);
};

getUsuario:any = function(){
  return Promise.resolve(this.usuario);
}


NewProject:any = function(obj){

  this.projects.push(obj);
  return Promise.resolve();

}

getProject:any = function(){
  return Promise.resolve(this.projects);
}

NewTask:any = function(obj){
  var TaskObject = {
      'codtask':obj.codtask,
      'projecttask':obj.projecttask,
      'nametask':obj.nametask,
      'desctask':obj.desctask,
      'dstarttask':obj.dstarttask,
      'dendtask':obj.dendtask,
      'hstarttask':obj.hstarttask,
      'hendtask':obj.hendtask,
      'colortask':obj.colortask,
      'userstask':obj.userstask,
      'statustask':obj.statustask,
      'clientetask':obj.clientetask
  }
  this.tasks.push(TaskObject);
  return Promise.resolve();
}

changestatus(code, state){
  var newtask = this.db.object('/group/'+this.uiduser+'/'+'/tasks/'+code);
  newtask.update({'statustask':state});
}

getTasks:any = function(){
  console.log(this.tasks);
  return Promise.resolve(this.tasks);
}

CleanList(){
this.idsoft="";
this.softname="";
this.beschreibung="";
this.datumst="";
}

AddUser:any = function(objeto){
  this.items.push(objeto);
    return Promise.resolve();
}

AddProject:any = function(objeto){
  this.projects.push(objeto);
    return Promise.resolve();
}

NewSoftware:any = function(){
  var SoftObject = {
    'idsoft':this.idsoft,
    'softname':this.softname,
    'beschreibung':this.beschreibung,
    'datumst':this.datumst
  }
  this.items.push(SoftObject).then(()=>{
  this.CleanList();
  this.websection = "listsoft";
});
}

CleanClientList:any = function(){
    this.idcli = "";
    this.namecli = "";
    this.addresscli = "";
    this.citycli = "";
    this.phonecli = "",
    this.statuscli = "";
}

}