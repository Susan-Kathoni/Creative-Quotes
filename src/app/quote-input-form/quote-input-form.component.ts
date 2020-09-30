import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-input-form',
  templateUrl: './quote-input-form.component.html',
  styleUrls: ['./quote-input-form.component.css']
})
export class QuoteInputFormComponent implements OnInit {

  newQuote: Quote = new Quote(0, '', '', '', new Date());

  @Output() enterQuote = new EventEmitter<Quote>();
  createQuote() {
    this.enterQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, "", "", "", new Date());
  }


  constructor() { }

  ngOnInit(): void {
  }

}


  
