export class Quotes {
  id: number;
  quoteDescription: string;
  authorName: string;
  dateCreated: Date;
  dateToday: Date;
  upvote: number;
  downvote: number;



  constructor(id: number, authorName: string, quoteDescription: string) {
    this.quoteDescription = quoteDescription;
    this.id = id;
    this.authorName = authorName;
    


  }
  
}
