import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote ('The way to get started is to quit talking and begin doing.','Walt Disney','Mark',new Date(2021,2,26),5,3),
    new Quote ('If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt','Mark',new Date(2021,2,26),7,10),
    new Quote ("Life is what happens when you're busy making other plans.", 'John Lennon','Mark',new Date(2021,2,26),20,15),
    new Quote ("Spread love everywhere you go. Let no one ever come to you without leaving happier.","Mother Teresa","Mark",new Date(2021,2,28),100,50),
    new Quote ("Always remember that you are absolutely unique. Just like everyone else.","Margaret Mead","Mark",new Date(2021,2,28),700,2),
    new Quote ("Tell me and I forget. Teach me and I remember. Involve me and I learn.","Benjamin Franklin","Mark",new Date(2021.2,28),150,16)
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
