import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'child2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child2';
  constructor(public router: Router) {
    console.log('child2')
    console.log(window.location)
    this.router.navigateByUrl('/child2/page2')
  }
}
