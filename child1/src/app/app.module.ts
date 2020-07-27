import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import {PortalModule} from '@angular/cdk/portal';
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
