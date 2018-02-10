import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ImageService {
  private query: string;
  private BASE_URL: string = environment.BASE_URL;
  private ENDPOINT: string = this.BASE_URL;
  private TOKEN: string = environment.TOKEN;
  
 
  constructor(private _http : Http) { }

  getImage() {
    return this.BASE_URL
  }
}