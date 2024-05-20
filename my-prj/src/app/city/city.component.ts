import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  City:String="Bhopal";
  // imgpath:String | undefined;
  cityInfo:String="Bhopal is known as the “city of lakes”; its name is a derivation of Bhoj Tal (“Bhoj's Lake”), a lake constructed by Bhoj, a Hindu raja, in the 11th century. Today that lake is the Upper Bhopal Lake (Bada Talab), which is connected to the Lower Bhopal Lake (Chhota Talab) by an aqueduct."
}
