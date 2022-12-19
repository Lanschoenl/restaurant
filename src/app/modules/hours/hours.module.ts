import { NgModule } from '@angular/core';
import { HoursComponent } from './hours.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HoursComponent
  }
]

@NgModule({
  declarations: [
    HoursComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class HoursModule {
}
