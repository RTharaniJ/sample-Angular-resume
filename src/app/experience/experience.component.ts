import { Component,Input, OnInit } from '@angular/core';

interface IExperience{
Position :string,
duration :string,
company :string,
location :string,
description :string

}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
@Input () experience: IExperience [] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
