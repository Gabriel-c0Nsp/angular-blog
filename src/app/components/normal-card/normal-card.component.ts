import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-card',
  templateUrl: './normal-card.component.html',
  styleUrls: ['./normal-card.component.css']
})
export class NormalCardComponent implements OnInit {

  @Input()
  imageCover: string = ""
  @Input()
  cardTitle: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
