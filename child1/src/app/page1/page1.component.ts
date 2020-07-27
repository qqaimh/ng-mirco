import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, of, timer, interval } from 'rxjs';
import * as singleSpa from 'single-spa';
@Component({
  selector: 'child1-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  myRxjs: Observable<any>  = interval(1000);
  constructor() {
    console.log('child1-page1')
    console.log(window.location)
   }

  ngOnInit() {
    console.log('child1')
    const appNames = singleSpa.getAppNames();
    console.log(appNames); 
  }

  // 全局Event传值
  mytest() {
    let event = new CustomEvent('mytest', {detail:{id:8848}});
    window.dispatchEvent(event);
  }

  // RXJS传值
  sendOb() {
    let event = new CustomEvent('myrxjs', {detail:{rxjs:this.myRxjs}});
    window.dispatchEvent(event);
  }



}
