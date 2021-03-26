import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    {id:1, quote:'The way to get started is to quit talking and begin doing.',author:'-Walt Disney',uploader:'Mark Mukenia'},
    {id:2,quote:'If life were predictable it would cease to be life, and be without flavor.',author:'-Eleanor Roosevelt',uploader:'Mark Mukenia'},
    {id:3,quote:"Life is what happens when you're busy making other plans.", author:'-John Lennon',uploader:'Mark Mukenia'},
  ];

  deleteQuote(isComplete:any, index:any){
    if (isComplete){
      let toDelete=confirm('Are you sure you want to delete this quote?')

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
