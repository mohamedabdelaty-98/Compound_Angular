import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { CmpoundComponent } from './Components/CompoundPage/cmpound/cmpound.component';
import { AboutCompanyComponent } from './Components/about-company/about-company.component';
import { UnitDetailsComponent } from './Components/Units/unit-details/unit-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'CompoundPage',
    component: CmpoundComponent,
  },
  { path: 'AboutUs', component: AboutCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
