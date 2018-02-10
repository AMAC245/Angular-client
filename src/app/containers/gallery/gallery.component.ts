import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../shared/image.service';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'container-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public gallery: any[];
  private BASE: string = environment.BASE_URL
  private TOKEN: string = environment.TOKEN

  constructor(private _http : Http) {
    this._http
      .get(this.BASE + this.TOKEN)
      .subscribe(res => {
        this.gallery = res.json() as any[]
        console.log(this.gallery)
      })    
  }
}
