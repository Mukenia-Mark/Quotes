import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote ('The way to get started is to quit talking and begin doing.','Walt Disney','Mark',new Date(2021,2,26),0,0),
    new Quote ('If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt','Mark',new Date(2021,2,26),0,0),
    new Quote ("Life is what happens when you're busy making other plans.", 'John Lennon','Mark',new Date(2021,2,26),0,0),
    new Quote ("Spread love everywhere you go. Let no one ever come to you without leaving happier.","Mother Teresa","Mark",new Date(2021,2,28),0,0)
  ];


  addNewQuote(quote:any){
    let quoteLength=this.quotes.length;
    this.quotes.push(quote)
  }

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete=confirm('Are you sure you want to delete this quote?')

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
