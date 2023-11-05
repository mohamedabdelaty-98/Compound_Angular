import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { CmpoundComponent } from './Components/CompoundPage/cmpound/cmpound.component';
import { AboutCompanyComponent } from './Components/about-company/about-company.component';
import { ApplicationComponent } from './Components/application/application.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CompoundPage/:id', component: CmpoundComponent },
  { path: 'AboutUs', component: AboutCompanyComponent },
  { path: 'ContactUs', component: ApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
