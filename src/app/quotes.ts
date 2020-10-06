export class Quotes {
  dateToday: Date;
  showDetails: boolean;
  upvote: number;
  downvote: number;



  constructor(public id: number, public quoteDescription: string, public authorName: string, public dateSubmitted: Date, public submitterName: string ) {
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





  
   



