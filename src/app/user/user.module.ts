import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PreferenceComponent } from './preference/preference.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, PreferenceComponent, HistoryComponent, DashboardComponent]
})
export class UserModule { }
