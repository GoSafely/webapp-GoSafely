import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

class Marker {
	lat: number;
	long: number;

	constructor(lat, long) {
		this.lat = lat;
		this.long = long;
	}
}

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnInit, AfterViewInit {

	@Input() lat: number = 33.761887;
  	@Input() long: number = -84.360176;
  	@Input() zoom: number = 14;

  	MarkerOne = new Marker(33.761887, -84.360176);
  	MarkerTwo = new Marker(33.76, -84.36);

  	markers: Marker[] = [this.MarkerOne, this.MarkerTwo];

  	constructor() { }

  	ngOnInit() {
  	}

  	ngAfterViewInit() {
  		setInterval(() => {
  			this.MarkerOne.lat -= 0.00001;
  		}, 500);
  	}
}
