import { Component, OnInit } from '@angular/core';
import { UsuariosInterface } from 'src/app/models/UsuariosInterface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-desarrolladores',
  templateUrl: './desarrolladores.component.html',
  styleUrls: ['./desarrolladores.component.css']
})
export class DesarrolladoresComponent implements OnInit {

  //DatosAdministrador
  nombreServer: string = "";
  datosDesarrolladores: UsuariosInterface[] = [];

  constructor(public usuariosService: UsuariosService) {
    this.CargarDatos();
  }

  ngOnInit(): void {
  }

  CargarDatos(){
    this.usuariosService.CargarDesarrolladores().subscribe(async (res) =>
    {
      let valores: any = res;
      this.nombreServer = valores[0];
      this.datosDesarrolladores = valores[1];
      console.log("LISTA DE DESARROLLADORES");
      console.log(this.datosDesarrolladores);
    },
    err => console.log(err));
  }

}
