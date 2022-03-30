import { Component, OnInit } from '@angular/core';

import { AdminInterface } from 'src/app/models/AdminInterface'

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor() { }

  //DatosAdministrador
  datosAdmins: AdminInterface[] = [];

  ngOnInit(): void {
    let dato1 :AdminInterface = {Titulo: "Javier", Cuerpo: "Prueba1"};
    this.datosAdmins.push(dato1);
  }

}
