import { Component,Input, OnInit } from '@angular/core';

interface IEducation{
  Institution:string,
  program:string,
  year:number
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
 
  @Input () education:IEducation[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
