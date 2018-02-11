import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import routes from './routeConfig';
import { AppComponent } from './app.component';
import { GalleryComponent } from './containers/gallery/gallery.component';
import { ImageService } from './shared/image.service';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
