import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'container';
  myrxjs: Observable<any>
  constructor() {
    window.addEventListener('mytest', evt => {
      console.log(7777)
      console.log(evt)

    });
    window.addEventListener('myrxjs', evt => {
      console.log(8888)
      console.log(evt)
      this.myrxjs = (evt as any).data
      this.myrxjs.subscribe(res => {
        console.log(res)
      })
    });
    

  }
}
