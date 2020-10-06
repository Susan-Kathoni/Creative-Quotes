import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      1,
      'Solitude is a dangerous place to reason, without being favorable to virtue.',
      'Dr. Samuel Johnson.',
      new Date(2019, 8, 7),
      'Msamaria Mwema'
    ),
    new Quotes(
      2,
      'Honesty is the best policy - In the vast majority of cases, influence is wrought by talking.',
      'Michael Padus',
      new Date(2006, 12, 3),
      'Susan Kathoni'
    ),
    new Quotes(
      3,
      'You become what you eat.',
      'Crispus Matheka',
      new Date(2016, 5, 20),
      'Andrew Marwa'
    ),
    new Quotes(
      4,
      'It is always best to speak pragmatically to a pragmatic person. Most people will rarely act against their own self interest.',
      'Robert Greene',
      new Date(2020, 10, 8), 'Sister Susan'
    ),
  ];

  dateSubmitted() {
    this.dateSubmitted();
    
  }

  addUpVote(index) {
    this.quotes[index].upvote++;
  }

  addDownVote(index) {
    this.quotes[index].downvote++;
  }

  highestUpVote() {
    let highestUpVoteQuote = new Quotes(0, '', '', new Date(), '');
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

  deleteQuote(isDisliked: boolean, index: number) {
    // if (isDisliked) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].quoteDescription}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    // }
  }

  addNewQuote(newQuote: Quotes) {
    newQuote.id = this.quotes.length + 1;
    this.quotes.push(newQuote);
    this.quotes.push();
  }

 validateForm() {
    var x = document.forms["quoteDescription"]["authorName"]["submitterName"].value;
    if (x == "") {
      alert("All fields must be filled out");
      return false;
    }
 }
  
  
   constructor() {}

  ngOnInit(): void {}
}
