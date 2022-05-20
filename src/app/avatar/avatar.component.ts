import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() price:number;
  @Input() src:string;
  constructor() {
    this.price=0
    this.src= ''
   }

  ngOnInit(): void {
  }

}
