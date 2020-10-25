import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleSpaService } from '../../services/single-spa.service';
import { Observable } from 'rxjs';
import * as singleSpa from 'single-spa';

@Component({
  selector: 'app-spa-host',
  template: `<div #appContainer> </div>`,
})
export class SpaHostComponent implements OnInit {
  @ViewChild('mycontent', {static: true}) mycontent: ElementRef;
  constructor(private singleSpaService: SingleSpaService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(111222)
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

  mount(): Observable<unknown> {
    return this.singleSpaService.mount(this.appName, this.appContainerRef.nativeElement);
  }

  unmount(): Observable<unknown> {
    return this.singleSpaService.unmount(this.appName);
  }
}
