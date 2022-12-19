import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  }
]

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class MenuModule {
}
