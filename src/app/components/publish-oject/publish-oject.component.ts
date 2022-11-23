import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-oject',
  templateUrl: './publish-oject.component.html',
  styleUrls: ['./publish-oject.component.css']
})
export class PublishOjectComponent implements OnInit {

  center: google.maps.LatLngLiteral = {lat: 40.1301633, lng: -8.2016125};

  constructor() { }

  ngOnInit(): void {
  }

  placeMarker(){
    
  }

}
