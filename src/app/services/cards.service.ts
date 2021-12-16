import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from '../interfaces/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private _http: HttpClient) { }

  getcards(){
    return this._http.get<Cards[]>('assets/cards.json');
  }
}
