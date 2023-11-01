import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarksComponent } from './Components/landmarks/landmarks.component';
import { StaticVideoComponent } from './Components/static-video/static-video.component';
import { AboutsectionComponent } from './Components/aboutsection/aboutsection.component';

@NgModule({
  declarations: [
    AppComponent,
    LandmarksComponent,
    StaticVideoComponent,
    AboutsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
