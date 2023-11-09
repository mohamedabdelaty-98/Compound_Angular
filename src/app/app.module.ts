import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { FilterComponent } from './Components/Units/filter/filter.component';
import { CardComponent } from './Components/Units/DisplayUnit/card.component';
import { FooterComponent } from './Components/footer/footer.component';

import { CompoundSliderComponent } from './Components/CompoundPage/compound-slider/compound-slider.component';

import { StaticVideoComponent } from './Components/Home/static-video/static-video.component';
import { AboutsectionComponent } from './Components/Home/aboutsection/aboutsection.component';

import { SliderHomeComponent } from './Components/Home/slider-home/slider-home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LandmarksComponent } from './Components/CompoundPage/landmarks/landmarks.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { CmpoundComponent } from './Components/CompoundPage/cmpound/cmpound.component';
import { AboutCompanyComponent } from './Components/about-company/about-company.component';

import { ServicesProjectComponent } from './Components/CompoundPage/services-project/services-project.component';
import { BuildingComponent } from './Components/BuildingPage/building/building.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { CompoundCardsComponent } from './Components/CompoundPage/compound-cards/compound-cards.component';
import { SponsersComponent } from './Components/Home/sponsers/sponsers.component';
import { TestImageComponent } from './Components/test-image/test-image.component';
import { UnitDetailsComponent } from './Components/Units/unit-details/unit-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RyalcurrencyPipe } from './Pipes/ryalcurrency.pipe';
import { BuildingDescriptionComponent } from './Components/BuildingPage/building-description/building-description.component';
import { ApplicationComponent } from './Components/application/application.component';
import { FormsModule } from '@angular/forms';
import { NewCompoundComponent } from './Components/Admin/Compound/new-compound/new-compound.component';
import * as L from 'leaflet';

import { CompoundbuildingComponent } from './Components/BuildingPage/compoundbuilding/compoundbuilding.component';
import { DownloadFileService } from './services/CompoundServices/download-file.service';
import { ServiceBuildingComponent } from './Components/BuildingPage/service-building/service-building.component';
import { DashBoardModule } from './DashBoard/app.module';
import { DashboardadminComponent } from './Components/Admin/dashboardadmin/dashboardadmin.component';
import { EditCompoundComponent } from './Components/Admin/Compound/edit-compound/edit-compound.component';
import { GetCompoundsComponent } from './Components/Admin/Compound/get-compounds/get-compounds.component';
import { NewbuildingComponent } from './Components/Admin/Building/newbuilding/newbuilding.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptorComponent } from './account/auth-interceptor/auth-interceptor.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddreviewsComponent } from './Components/Reviews/addreviews/addreviews.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    CardComponent,
    FooterComponent,
    CompoundSliderComponent,
    LandmarksComponent,
    StaticVideoComponent,
    AboutsectionComponent,
    SliderHomeComponent,
    NavBarComponent,
    HomeComponent,
    CmpoundComponent,
    AboutCompanyComponent,
    ServicesProjectComponent,
    BuildingComponent,
    LoginComponent,
    RegisterComponent,
    CompoundCardsComponent,
    SponsersComponent,
    TestImageComponent,
    UnitDetailsComponent,
    RyalcurrencyPipe,
    BuildingDescriptionComponent,
    ApplicationComponent,
    CompoundbuildingComponent,
    ServiceBuildingComponent,
    NewCompoundComponent,
    DashboardadminComponent,
    EditCompoundComponent,
    GetCompoundsComponent,
    NewbuildingComponent,
    AuthInterceptorComponent,
    AddreviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    DashBoardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorComponent,
      multi: true,
    },
    DownloadFileService,
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
