import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imageCover: string = 'https://cdn.marvel.com/content/1x/004tho_ons_mas_mob_04.jpg'
  contentTitle: string = 'MINHA NOTÍCIA'
  contentDescription: string = 'Qualquer coisa aqui sobre a notícia'

  constructor() { }

  ngOnInit(): void {
  }

}
