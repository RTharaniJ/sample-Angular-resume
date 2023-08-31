import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{  

  resume: any =null;  

 constructor(private http:HttpClient){}
 
 ngOnInit():void {
    this.http.get('https://gist.githubusercontent.com/RTharaniJ/f9d628ec64433d87f57a41812ab6faed/raw/86e3c93dde5f26861bc5145b9c4de56ec6b8a42f/resume-practice.json')
    .subscribe(res => {
      this.resume=res;
        console.log(res);
      });
  } 
}

