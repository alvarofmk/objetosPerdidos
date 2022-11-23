import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-oject',
  templateUrl: './publish-oject.component.html',
  styleUrls: ['./publish-oject.component.css']
})
export class PublishOjectComponent implements OnInit {

  center: google.maps.LatLngLiteral = {lat: 40.1301633, lng: -8.2016125};
  markerVisibility: boolean = false;
  markerPosition: google.maps.LatLngLiteral = {lat: 0, lng: 0};

  constructor() { }

  ngOnInit(): void {
  }

  placeMarker(position: google.maps.LatLng | null){
    debugger;
    this.markerVisibility = true;
    if(position != null){
      this.markerPosition.lat = position.lat();
      this.markerPosition.lng = position.lng();
    }
  }

}
