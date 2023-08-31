import { Component,Input, OnInit } from '@angular/core';

// interface IProject{
//   title:string,
//   description:string
// }

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input () projects:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
