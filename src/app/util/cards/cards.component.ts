import { Component, Input, OnInit } from '@angular/core';
import { CardsData } from 'src/app/page/page.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cardsData: CardsData[];

  constructor() { }

  ngOnInit() {
    console.log(this.cardsData,"cardsData");
  }

}
