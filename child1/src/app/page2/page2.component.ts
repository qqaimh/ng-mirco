import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child1-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() {
    console.log('child1-page2')
    console.log(window.location)
   }

  ngOnInit() {
  }

}
