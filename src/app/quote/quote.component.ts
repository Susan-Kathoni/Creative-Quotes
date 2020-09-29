import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
  
 export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Mark Maasai', 'A good day starts early'), 
    new Quote ( 2,'Michael Padus','Hardwork pays' ),
    new Quote(3, 'Crispus Matheka', 'You become what you eat'),
    new Quote ( 4,'Sister Susan','You can learn Angular' ),
  ];

  toggleDetails(index){
    this.quotes[index].quoteDescription = !this.quotes[index].quoteDescription;
  }

  dislikedQuote(isDisliked, index){
    if (isDisliked) {
      this.quotes.splice(index,1);
    }
  }

  likedQuote(isDisliked, index){
    if (isDisliked) {
      let toDelete = confirm(`Are you sure you want to cancel ${this.quotes[index].quoteDescription}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
