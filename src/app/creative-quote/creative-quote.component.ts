import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-creative-quote',
  templateUrl: './creative-quote.component.html',
  styleUrls: ['./creative-quote.component.css'],
})
export class GoalComponent implements OnInit {
  quotes: Quotes[] = [
    { id: 1, quoteDescription: 'A good day starts early' },
    { id: 2, quoteDescription: 'Hardwork pays' },
    { id: 3, quoteDescription: 'You become what you eat' },
    { id: 4, quoteDescription: 'You can learn Angular' },
  ];

  constructor() {}

  ngOnInit() {}
}
