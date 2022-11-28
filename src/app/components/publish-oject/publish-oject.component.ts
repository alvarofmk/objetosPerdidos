import { Component, OnInit } from '@angular/core';
import { LostItem } from '../model/lostItem.interface';

@Component({
  selector: 'app-publish-oject',
  templateUrl: './publish-oject.component.html',
  styleUrls: ['./publish-oject.component.css']
})
export class PublishOjectComponent implements OnInit {

  center: google.maps.LatLngLiteral = {lat: 40.1301633, lng: -8.2016125};
  markerVisibility: boolean = false;
  markerPosition: google.maps.LatLngLiteral = {lat: 0, lng: 0};
  category: number = 0;
  description: string = "";
  allLostItems: LostItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  placeMarker(position: google.maps.MapMouseEvent){
    debugger;
    this.markerVisibility = true;
    if(position != null){
      this.markerPosition = position.latLng!.toJSON();
    }
  }

  saveItem():LostItem {
    let item: LostItem = {} as LostItem;
    item.categoryId = this.category;
    item.description = this.description;
    item.location = this.markerPosition;
    console.log(item);
    return item;
  }

  checkLostItem(lostItem: LostItem){
    return this.allLostItems.filter(item => {
      google.maps.geometry.spherical.computeDistanceBetween(lostItem.location, item.location) < 1000
    })
  }

}
