import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'child1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child1';

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('child1')
    console.log(window.location)
    this.activatedRoute.params.subscribe(params => {

      console.log(params)
    })
    
  }
}
