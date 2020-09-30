export class Quotes {
  id: number;
  quoteDescription: string;
  authorName: string;
  submitterName: string;
 dateSubmitted: Date;
  dateToday: Date;
  showDetails: boolean;
  upvote: number;
  downvote: number;



  constructor(id: number,quoteDescription: string, authorName: string, dateSubmitted: Date, submitterName: string ) {
    this.id = id;
    this.quoteDescription = quoteDescription;
    this.authorName = authorName;
    this.submitterName = submitterName;
    this.dateSubmitted =dateSubmitted;
    this.showDetails = false;
    this.upvote = 0;
    this.downvote = 0;

    
  }
  
}





  
   



