import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
// import {google} from 'angular-google-maps'


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: [`
    agm-map {
      height: 500px;
    }
  `]
})
export class LocationComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  // startMap() {
  //   const ironhackBCN = {
  //     lat: 41.3977381,
  //     lng: 2.190471916};
  //   const map = new google.maps.Map(
  //     document.getElementById('map'),
  //     {
  //       zoom: 15,
  //       center: ironhackBCN
  //     }
  //   );
  // }
  
  // startMap();
  lat: number = 51.5033640;
  lng: number = -0.1276250;
}