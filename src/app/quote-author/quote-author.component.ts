import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
 

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upvote(){
    this.quote.upVote+=1;
  }
  downvote(){
    this.quote.downVote+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
