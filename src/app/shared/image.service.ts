import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
  private query: string;
  private BASE_URL: string = environment.BASE_URL;
  private TOKEN: string = environment.TOKEN;

  constructor(private _http: Http) { }

  getImages() {
    return this._http.get(this.BASE_URL + this.TOKEN)
      .map(res => res.json())
  }
}
