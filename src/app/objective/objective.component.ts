import { Component,Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss']
})
export class ObjectiveComponent implements OnInit {
  @Input () objective ='';
  constructor() { }

  ngOnInit(): void {
  }

}
