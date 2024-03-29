import { Component, OnInit } from '@angular/core';

import { HomeInterface } from 'src/app/models/HomeInterface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  nombreServer: string = "";
  datosHome: HomeInterface[] = [];

  ngOnInit(): void {
    this.CargarDatos();
  }

  CargarDatos(){
    this.homeService.CargarHome().subscribe(async (res) =>
    {
      let valores: any = res;
      this.nombreServer = valores.server;
      this.datosHome = valores.home;
      console.log("LISTA DE HOME");
      console.log(this.datosHome);
    },
    err => console.log(err));
  }

}
