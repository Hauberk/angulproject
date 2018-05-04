import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GregistrationComponent  } from './gregistration/gregistration.component';
import { HomeComponent } from './home/home.component';
import { AddtruckComponent } from './addtruck/addtruck.component';
const routes: Routes = [
  { path: '', 
  component: HomeComponent 
  },
  { path: 'gregistration/:id', 
  component: GregistrationComponent 
  },
  { path: 'addtruck/:id', 
  component: AddtruckComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
