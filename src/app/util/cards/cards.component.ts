import { Component, Input, OnInit } from '@angular/core';
import { CardsData } from 'src/app/pages/page.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cardsData!: CardsData[];
  @Input() articleCard: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.cardsData,"cardsData");
  }

}
