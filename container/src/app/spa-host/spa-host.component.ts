import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleSpaService } from '../../services/single-spa.service';
import { Observable } from 'rxjs';
import * as singleSpa from 'single-spa';

@Component({
  selector: 'app-spa-host',
  template: `<button (click)="sendContainer()"> 牛奶 </button>
             <div #mycontent style = "border: 1px solid red;" > 嵌入内容 </div>
             <div #appContainer> </div>`
  ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaHostComponent implements OnInit {
  myModule: System.Module
  @ViewChild('mycontent', {static: true}) mycontent: ElementRef;
  constructor(private singleSpaService: SingleSpaService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {

      console.log(params)
      const mountedAppNames = singleSpa.getMountedApps();
      console.log(mountedAppNames); // ['app1', 'app2', 'navbar']
      const status = singleSpa.getAppStatus('app1');
      console.log(status); // one of many statuses (see list below). e.g. MOUNTED
    })
  }

  @ViewChild('appContainer', { static: true })
  appContainerRef: ElementRef;

  appName: string;

  



  ngOnInit() {
    this.appName = this.route.snapshot.data.app;
    this.mount().subscribe(res => {
      console.log(7777888)
      console.log(res)
    });
  }

  sendContainer() {
    /*
    if (!this.myModule) {
      System.import('child2').then(res => {
        console.log(9999)
        console.log(res)
        this.myModule = res;
        res.bootstrap()
        res.mount(this.mycontent.nativeElement)
      })
    } else {
      console.log(9999)
      console.log(this.myModule)
      this.myModule.bootstrap()
      this.myModule.mount(this.mycontent.nativeElement)
    }
    */
    System.import('child2').then((res) => {
      console.log(77555)
      console.log(res.default)
      res.default.mount(this.mycontent.nativeElement)
      })
      // res.mount(this.mycontent.nativeElement)
      // res.default.mount(this.mycontent.nativeElement)

    // let event = new CustomEvent('mycontent', {detail: {mycontent: this.mycontent}});
    // window.dispatchEvent(event);
  }

  mount(): Observable<unknown> {
    return this.singleSpaService.mount(this.appName, this.appContainerRef.nativeElement);
  }

  unmount(): Observable<unknown> {
    return this.singleSpaService.unmount(this.appName);
  }
}
