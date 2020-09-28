import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quotes: Quotes;
  @Output() isDisliked = new EventEmitter<boolean>();

  quoteDisliked(disliked:boolean){
    this.isDisliked.emit(disliked);}
  

  constructor() { }

  ngOnInit() {
  }

}
