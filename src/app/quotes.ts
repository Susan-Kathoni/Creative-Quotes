export class Quotes {
  id: number;
  quoteDescription: string;
  authorName: string;
  dateSubmitted: Date;
  dateToday: Date;
  showDetails: boolean;
  upvote: number;
  downvote: number;



  constructor(id: number,quoteDescription: string, authorName: string, dateSubmitted: Date, dateToday: Date, showDetails: boolean, upvote: number, downvote: number  ) {
    this.id = id;
    this.quoteDescription = quoteDescription;
    this.authorName = authorName;
    this.dateSubmitted = dateSubmitted;
    this.dateToday = dateToday;
    this.showDetails = showDetails;
    this.upvote = upvote;
    this.downvote = downvote;
    
  }
  
}

  
   



