import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {

  ticks: number;

  constructor() {}

  ngOnInit() {
    this.ticks = 0;
  }

  tick() {
    this.ticks++;
  }

}
