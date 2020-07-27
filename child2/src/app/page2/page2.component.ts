import { Component, OnInit, ComponentFactoryResolver, Injector, Inject, ApplicationRef, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'child2-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  private _appRef: ApplicationRef;
  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    @Inject(DOCUMENT) private _document) {
    console.log('child2-page2')
    console.log(window.location)
   }

  ngOnInit() {
    window.addEventListener('mycontent', (evt: CustomEvent) => {
      if (!this._appRef) {
        this._appRef = this._injector.get(ApplicationRef);
      }
    
      // instantiate a DomPortalOutlet
      const portalOutlet = new DomPortalOutlet(evt.detail.mycontent.nativeElement, this._componentFactoryResolver, this._appRef, this._injector);
      // instantiate a ComponentPortal<DialogComponent>
      const componentPortal = new ComponentPortal(DialogComponent);
      // attach a ComponentPortal to a DomPortalOutlet
      portalOutlet.attach(componentPortal);

    })
  }

  openComponentPortalOutSideAngularContext() {
    let container = this._document.createElement('div');
    container.classList.add('component-portal');
    container = this._document.body.appendChild(container);
  
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }
  
    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(container, this._componentFactoryResolver, this._appRef, this._injector);
    // instantiate a ComponentPortal<DialogComponent>
    const componentPortal = new ComponentPortal(DialogComponent);
    // attach a ComponentPortal to a DomPortalOutlet
    portalOutlet.attach(componentPortal);
  }
  
  
  @ViewChild('_templatePortalOutsideAngularContext', {read: TemplateRef}) _template: TemplateRef<any>;
  @ViewChild('_templatePortalOutsideAngularContext', {read: ViewContainerRef}) _viewContainerRef: ViewContainerRef;
  openTemplatePortalOutSideAngularContext() {
    let container = this._document.createElement('div');
    container.classList.add('template-portal');
    container = this._document.body.appendChild(container);
  
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }
  
    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(container, this._componentFactoryResolver, this._appRef, this._injector);
    // instantiate a TemplatePortal<>
    const templatePortal = new TemplatePortal(this._template, this._viewContainerRef);
    // attach a TemplatePortal to a DomPortalOutlet
    portalOutlet.attach(templatePortal);
  }

}
