import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { ImageService } from '../../shared/image.service';

@Component({
  selector: 'container-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public gallery: any[];

  constructor(private _imageService : ImageService) { }

  ngOnInit() {
    return this._imageService.getImages().subscribe(images => {
      this.gallery = images,
      err => console.error(err)
    })
  }
}