import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmmenitiesCompoundComponent } from './component/ammenities-compound/ammenities-compound.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

// import { FormBuilder} from '@angular/forms';

// import { CompoundSliderComponent } from './Components/CompoundPage/compound-slider/compound-slider.component';
// import { LandmarksComponent } from './Components/CompoundPage/landmarks/landmarks.component';
// import { AboutsectionComponent } from './Components/Home/aboutsection/aboutsection.component';
// import { SliderHomeComponent } from './Components/Home/slider-home/slider-home.component';
// import { StaticVideoComponent } from './Components/Home/static-video/static-video.component';
// import { homeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    AmmenitiesCompoundComponent,
    RegisterComponent,
    // homeComponent,
    LoginComponent,


    // CompoundSliderComponent,

    // LandmarksComponent,
    // StaticVideoComponent,
    // AboutsectionComponent,
    // SliderHomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
