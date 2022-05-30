import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HealthtipsComponent } from './pages/healthtips/healthtips.component';

const routes: Routes = [
  {path: '', component: HealthtipsComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
