import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandmarksComponent } from './Components/landmarks/landmarks.component';
import { StaticVideoComponent } from './Components/static-video/static-video.component';
import { AboutsectionComponent } from './Components/aboutsection/aboutsection.component';

import { SliderHomeComponent } from './component/slider-home/slider-home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,

    LandmarksComponent,
    StaticVideoComponent,
    AboutsectionComponent

    SliderHomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
