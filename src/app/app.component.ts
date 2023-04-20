import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  display: any;
  // center: google.maps.LatLngLiteral = {
  //   lat: 23.797642,
  //   lng: 86.436989
  // };
  // zoom = 14;
  center: google.maps.LatLngLiteral = {
    lat: 1,
    lng: 1
  };
  zoom = 4;

  // vertices: google.maps.LatLngLiteral[] = [
  //   { lat: 23.797642, lng: 86.436989 },
  //   { lat: 23.782705, lng: 86.420429 }
  // ];
 /* eslint-disable */
  pos: IPositions[] = [
    { lat: 1, lng: 1, time: 1 },
    { lat: 2, lng: 2, time: 2 },
    { lat: 3, lng: 3, time: 3 },
    { lat: 4, lng: 4, time: 4 }
  ];
  // pos.sort((a,b) => (a.time - b.time));
  // positions.
  // vertices: google.maps.LatLngLiteral[] = positions.map((x) )
  console.log(pos);
 /* eslint-disable */
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}

export interface IPositions {
  lat: number;
  lng: number;
  time: number;
}
