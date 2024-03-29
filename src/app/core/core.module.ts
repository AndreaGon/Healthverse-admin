import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, SideNavComponent],
  imports: [CommonModule, SharedModule, MaterialModule, RouterModule],
  exports: [LoginComponent, SideNavComponent]
})
export class CoreModule {}
