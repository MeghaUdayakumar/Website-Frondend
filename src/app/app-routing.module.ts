import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OutletListComponent } from './outlet-list/outlet-list.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';


const routes: Routes = [
  {path:'homepage', component:HomepageComponent },
  {path:'outlet', component:OutletListComponent},
  {path:'volunteer', component:VolunteerFormComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[HomepageComponent, OutletListComponent, VolunteerFormComponent ]
