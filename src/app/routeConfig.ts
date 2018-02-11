import { Routes } from '@angular/router';
import { GalleryComponent } from './containers/gallery/gallery.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: GalleryComponent
  }
];

export default routes;