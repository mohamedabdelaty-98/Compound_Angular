import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterComponent } from './Component/filter/filter.component';
import { CardComponent } from './Component/card/card.component';
import { FooterComponent } from './Component/footer/footer.component';


import { homeComponent } from './Home/home.component';

import { CompoundSliderComponent } from './Components/CompoundPage/compound-slider/compound-slider.component';

import { StaticVideoComponent } from './Components/Home/static-video/static-video.component';
import { AboutsectionComponent } from './Components/Home/aboutsection/aboutsection.component';

import { SliderHomeComponent } from './Components/Home/slider-home/slider-home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LandmarksComponent } from './Components/CompoundPage/landmarks/landmarks.component';
import { AmmenitiesCompoundComponent } from './Component/ammenities-compound/ammenities-compound.component';


@NgModule({
  declarations: [
    AppComponent,

    FilterComponent,
    CardComponent,
    FooterComponent,

    AmmenitiesCompoundComponent,


    homeComponent,
   


    CompoundSliderComponent,

    LandmarksComponent,
    StaticVideoComponent,
    AboutsectionComponent,
    SliderHomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
