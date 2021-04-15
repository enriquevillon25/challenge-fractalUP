import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  apiKey = environment.apiKey;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  searchAlbums(term:string){
    // return this.http.get(`${this.baseUrl}/get.php?idCliente=${id}`)
    return this.http.get(environment.baseUrl+'/search?q='+term,{"headers": {"x-rapidapi-key":this.apiKey}});
  }
}
