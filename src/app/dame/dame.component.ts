import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dame',
  templateUrl: './dame.component.html',
  styleUrls: ['./dame.component.css']
})
export class DameComponent implements OnInit {

  @Input() dame:number;

  constructor() {
    this.dame = 0
   }

  ngOnInit(): void {
  }

}
