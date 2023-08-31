import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  @Input() hobbies: string[]= [];

  constructor() { }

  ngOnInit(): void {
  }

}
