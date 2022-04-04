import { Component, Input, OnInit } from '@angular/core';

import { HomeInterface } from 'src/app/models/HomeInterface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() datosHome: HomeInterface[] = [];

  ngOnInit(): void {
    //console.log(this.datosHome);
  }

}
