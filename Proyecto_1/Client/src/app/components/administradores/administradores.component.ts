import { Component, OnInit } from '@angular/core';

import { UsuariosInterface } from 'src/app/models/UsuariosInterface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor(public usuariosService: UsuariosService) { }

  //DatosAdministrador
  nombreServer: string = "";
  datosAdmins: UsuariosInterface[] = [];

  ngOnInit(): void {
    this.CargarDatos();
    //this.datosAdmins.push(dato1);
  }

  CargarDatos(){
    this.usuariosService.CargarAdministradores().subscribe(async (res) =>
    {
      let valores: any = res;
      this.nombreServer = valores[0];
      this.datosAdmins = valores[1];
      console.log("LISTA DE ADMINISTRADORES");
      console.log(this.datosAdmins);
    },
    err => console.log(err));
  }

}
