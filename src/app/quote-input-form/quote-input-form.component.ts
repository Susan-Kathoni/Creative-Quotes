import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-input-form',
  templateUrl: './quote-input-form.component.html',
  styleUrls: ['./quote-input-form.component.css']
})
export class QuoteInputFormComponent implements OnInit {

  newQuote: Quotes = new Quotes(0, '','', new Date(), '');

  @Output() enterQuote = new EventEmitter<Quotes>();
  createQuote() {
    this.enterQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0, '', '', new Date(), '');
  }


  constructor() {}

  ngOnInit(): void {}

}




  
