import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from 'src/app/interfaces/cards';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  cards: Observable<Cards[]>;

  constructor(private _http:CardsService) { }

  ngOnInit() {

    this.cards = this._http.getcards();
    
  }

}
