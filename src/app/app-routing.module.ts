import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./modules/photos/photos.module').then(m => m.PhotosModule)
  },
  {
    path: 'hours',
    loadChildren: () => import('./modules/hours/hours.module').then(m => m.HoursModule)
  },
  {
    path: 'imprint',
    loadChildren: () => import('./modules/imprint/imprint.module').then(m => m.ImprintModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./modules/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
