import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { HealthtipsComponent } from './pages/healthtips/healthtips.component';

const routes: Routes = [
  {path: '', component: HealthtipsComponent, canActivate: [AuthGuard]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
