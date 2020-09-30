import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
    
export class QuotesDetailsComponent implements OnInit {
 
    @Input() quote: Quotes;
    @Output() isDisliked = new EventEmitter<boolean>();
  
  quoteDisliked(isDisliked:boolean){
    this.isDisliked.emit(isDisliked);
  }

  constructor() { }

  ngOnInit() : void {
  }

}



 






 

