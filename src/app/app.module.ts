import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmmenitiesCompoundComponent } from './component/ammenities-compound/ammenities-compound.component';

@NgModule({
  declarations: [
    AppComponent,
    AmmenitiesCompoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
