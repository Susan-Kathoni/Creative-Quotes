import { Component, OnInit } from '@angular/core';
import {Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
  
 export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'A good day starts early','Mark Maasai', new Date(2016, 2, 23)), 
    new Quote ( 2,'Hardwork pays','Michael Padus', new Date(2006, 12, 3)),
    new Quote(3, 'You become what you eat','Crispus Matheka', new Date(2016, 5, 20)),
    new Quote ( 4,'You can learn Angular','Sister Susan',new Date(2020, 10, 8)),
  ];

  toggleDetails(index){
    this.quotes[index].quoteDescription = !this.quotes[index].quoteDescription;
  }

  addUpVote(index) {
    this.quotes[index].upvote++;
  }

  addDownVote(index) {
    this.quotes[index].downvote++;
  }


  highestUpVote() {
    let highestUpVoteQuote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else {
      return;
    }
  }


   dislikedQuote(isDisliked: boolean, index: number) {
    if (isDisliked){
      let toDelete = confirm(
        `Are you sure you want to cancel ${this.quotes[index].quoteDescription}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
   }
  
   createNewQuote(newQuote: Quote) {
    newQuote.id = this.quotes.length + 1;
    this.quotes.push(newQuote);
  }


  constructor() { }

  ngOnInit(): void {
  }

