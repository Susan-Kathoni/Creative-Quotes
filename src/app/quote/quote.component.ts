import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [
    { id: 1, quoteDescription: 'A good day starts early',authorName:'Mark Maasai' },
    { id: 2, quoteDescription: 'Hardwork pays', authorName:'Michael Padus' },
    { id: 3, quoteDescription: 'You become what you eat', authorName:'Crispus Matheka' },
    { id: 4, quoteDescription: 'You can learn Angular', authorName:'Sister Susan' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
