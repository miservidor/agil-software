import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {

  constructor() { }

  // Doughnut
  public doughnutChartLabels:string[] = ['To do', 'In Progress', 'To Check', 'Ready'];
  public doughnutChartData:number[] = [0, 350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  ngOnInit() {
  }


}
