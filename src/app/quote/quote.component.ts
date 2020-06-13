import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[] = [
   new Quote(1,'Motivation','Push yourself, because no one else is going to do it for you..'),
   new Quote(2, "Perseverance", "If you want to see the rainbow you have to put up with the rain.."),
   new Quote(3,'Inspiration','He was the light at the end of the road..,Sometimes later becomes never. ...')
 ]

  toggleDetails(index){
    this.quotes[index].showDescription =! this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
