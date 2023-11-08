import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { CmpoundComponent } from './Components/CompoundPage/cmpound/cmpound.component';
import { AboutCompanyComponent } from './Components/about-company/about-company.component';
import { ApplicationComponent } from './Components/application/application.component';
import { BuildingComponent } from './Components/BuildingPage/building/building.component';
import { DashBoardComponent } from './DashBoard/app.component';
import { DashboardadminComponent } from './Components/Admin/dashboardadmin/dashboardadmin.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { AuthGuard } from './Guards/auth.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CompoundPage/:id', component: CmpoundComponent },
  { path: 'AboutUs', component: AboutCompanyComponent },
  { path: 'ContactUs', component: ApplicationComponent },
  {
    path: 'CompoundPage/:id/BuildingPage/:buildingid',
    component: BuildingComponent,
  },
  {
    path: 'admin',
    component: DashboardadminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
