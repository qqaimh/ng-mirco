import { Component, OnInit, ApplicationRef, Inject, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'child1-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  private _appRef: ApplicationRef;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    @Inject(DOCUMENT) private _document) { }

  @ViewChild('_openComponentPortalInsideAngularContext', { read: ViewContainerRef }) _openComponentPortalInsideAngularContext: ViewContainerRef;
  openComponentPortalInsideAngularContext() {
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }

    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(this._openComponentPortalInsideAngularContext.element.nativeElement, this._componentFactoryResolver, this._appRef, this._injector);
    // instantiate a ComponentPortal<DialogComponent>
    const componentPortal = new ComponentPortal(DialogComponent);
    // attach a ComponentPortal to a DomPortalOutlet
    portalOutlet.attach(componentPortal);
  }


  @ViewChild('_templatePortalInsideAngularContext', { read: TemplateRef }) _templatePortalInsideAngularContext: TemplateRef<any>;
  @ViewChild('_openTemplatePortalInsideAngularContext', { read: ViewContainerRef }) _openTemplatePortalInsideAngularContext: ViewContainerRef;
  openTemplatePortalInsideAngularContext() {
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }

    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(this._openTemplatePortalInsideAngularContext.element.nativeElement, this._componentFactoryResolver, this._appRef, this._injector);
    // instantiate a TemplatePortal<>
    const templatePortal = new TemplatePortal(this._templatePortalInsideAngularContext, this._openTemplatePortalInsideAngularContext);
    // attach a TemplatePortal to a DomPortalOutlet
    portalOutlet.attach(templatePortal);


  }
}
