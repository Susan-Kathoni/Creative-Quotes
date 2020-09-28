import { Component } from '@angular/core';
import { Quotes } from './quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Creative-Quotes';
  // quotes: Quote[] = [
  //   { id: 1, quoteDescription: 'A good day starts early' },
  //   { id: 2, quoteDescription: 'Hardwork pays' },
  //   { id: 3, quoteDescription: 'You become what you eat' },
  //   { id: 4, quoteDescription: 'You can learn Angular' },
  // ];
}
