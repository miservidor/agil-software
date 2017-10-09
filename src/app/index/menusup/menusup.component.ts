import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menusup',
  templateUrl: './menusup.component.html',
  styleUrls: ['./menusup.component.css']
})
export class MenusupComponent implements OnInit {
  onNotify(message:string):void {
    this.loginmod = false;
  }
  constructor() { }
  loginmod:boolean = false;

  ngOnInit() {
  }

}
