import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent
  }
]

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class PhotosModule {
}
