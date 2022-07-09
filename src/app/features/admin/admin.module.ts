import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HealthtipsComponent } from './pages/healthtips/healthtips.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewPostDialogComponent } from './components/new-post-dialog/new-post-dialog.component';

@NgModule({
  declarations: [HealthtipsComponent, NewPostDialogComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule]
})
export class AdminModule {}
