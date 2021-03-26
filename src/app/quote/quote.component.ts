import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    {id:1, quote:'Watch finding Nemo'},
    {id:2,quote:'Buy Cookies'},
    {id:3,quote:'Get new Phone Case'},
    {id:4,quote:'Get Dog Food'},
    {id:5,quote:'Solve math homework'},
    {id:6,quote:'Plot my world domination plan'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
