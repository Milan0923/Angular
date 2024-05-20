import { Component } from '@angular/core';
import { CityInfo } from './CityInfo';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: '../product/product.component.css'
})
export class CityComponent {
  //array of objects
  carr:CityInfo[]=[
    new CityInfo("Pune","Pune is famous for historical places",["Shaniwar wada","Sinhagadh","Khadakvasla Dam","Ramdara","Paravati"],"./assets/images/Pune.jpg"),
    new CityInfo("Mumbai","Mumbai is famous for historical places",["Shaniwar wada","Sinhagadh","Khadakvasla Dam","Ramdara","Paravati"],"./assets/images/Mumbai.jpg"),
    new CityInfo("Chandrapur","Chandrapur is famous for historical places",["Shaniwar wada","Sinhagadh","Khadakvasla Dam","Ramdara","Paravati"],"./assets/images/Mumbai.jpg"),
    new CityInfo("Nagpur","Nagpur is famous for historical places",["Shaniwar wada","Sinhagadh","Khadakvasla Dam","Ramdara","Paravati"],"./assets/images/Mumbai.jpg"),
    new CityInfo("Kolhapur","Kolhapur is famous for historical places",["Shaniwar wada","Sinhagadh","Khadakvasla Dam","Ramdara","Paravati"],"./assets/images/Mumbai.jpg"),
    new CityInfo("Nashik","Nashik is famous for historical places",["Shaniwar wada","Sinhagadh","Khadakvasla Dam","Ramdara","Paravati"],"./assets/images/Mumbai.jpg"),
    new CityInfo("Amravati","Amravati is famous for historical places",["Shaniwar wada","Sinhagadh","Khadakvasla Dam","Ramdara","Paravati"],"./assets/images/Mumbai.jpg"),
  ];

}
