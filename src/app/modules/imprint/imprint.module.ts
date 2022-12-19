import { NgModule } from '@angular/core';
import { ImprintComponent } from './imprint.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ImprintComponent
  }
]

@NgModule({
  declarations: [
    ImprintComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class ImprintModule {
}
