import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
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
  allItems: LostItem[] = [];
  found: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.found = params['found'] == "true" ? true: false;
      }
    );
    this.dataService.getAll(!this.found).then(allDocs => this.allItems = allDocs);
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
    this.dataService.save(item, this.found);
    console.log(this.checkLostItem(item));
    return item;
  }

  checkLostItem(lostItem: LostItem){
    return this.allItems.filter(item => google.maps.geometry.spherical.computeDistanceBetween(lostItem.location, item.location) < 1000 && lostItem.categoryId == item.categoryId)
  }

}
