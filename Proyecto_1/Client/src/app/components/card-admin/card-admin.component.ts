import { Component, Input, OnInit } from '@angular/core';

import { UsuariosInterface } from 'src/app/models/UsuariosInterface'

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  styleUrls: ['./card-admin.component.css']
})
export class CardAdminComponent implements OnInit {

  constructor() { }

  //Style
  styleCadena = "4eb7ff";
  //INPUT
  @Input() usuario: UsuariosInterface;

  ngOnInit(): void {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.styleCadena = randomColor;
  }

}
