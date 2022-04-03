import { Component, Input, OnInit } from '@angular/core';

import { UsuariosInterface } from 'src/app/models/UsuariosInterface';

@Component({
  selector: 'app-card-developer',
  templateUrl: './card-developer.component.html',
  styleUrls: ['./card-developer.component.css']
})
export class CardDeveloperComponent implements OnInit {

  //Style
  styleCadena = "4eb7ff";
  //INPUT
  @Input() usuario: UsuariosInterface;

  constructor() { }

  ngOnInit(): void {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.styleCadena = randomColor;
  }

}
