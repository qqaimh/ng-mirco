import { Component, OnInit, ViewChild, ViewContainerRef, ElementRef, getModuleFactory, NgModuleRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { mountRootParcel } from 'single-spa';
import { SingleSpaService } from 'src/services/single-spa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'container';
  $myrxjs: Subscription
  constructor() {
    window.addEventListener('mytest', evt => {
      console.log(7777)
      console.log(evt)

    });
    window.addEventListener('myrxjs', (evt: CustomEvent) => {
      console.log(8888)
      console.log(evt)
      this.$myrxjs = evt.detail.rxjs.subscribe(res => {
        console.log(444555)
        console.log(res)
      })
    });
    

  }

  handleRxjs() {
   this.$myrxjs.unsubscribe()
   
  }

  


}
