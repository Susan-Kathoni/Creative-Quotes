import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-input-form',
  templateUrl: './quote-input-form.component.html',
  styleUrls: ['./quote-input-form.component.css']
})
export class QuoteInputFormComponent implements OnInit {

  newQuote = new Quotes(0, '','', new Date(), '');

  @Output() addQuote = new EventEmitter<Quotes>();
  submitQuote(){
    this.addQuote.emit(this.newQuote);
      }


  constructor() {}

  ngOnInit(): void {}

}




  
