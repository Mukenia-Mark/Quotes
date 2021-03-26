import { Component } from '@angular/core';
import{Quote} from "./quote"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote:Quote[] = [
    {id:1, quote:'Watch finding Nemo'},
    {id:2,quote:'Buy Cookies'},
    {id:3,quote:'Get new Phone Case'},
    {id:4,quote:'Get Dog Food'},
    {id:5,quote:'Solve math homework'},
    {id:6,quote:'Plot my world domination plan'},
  ];
}
