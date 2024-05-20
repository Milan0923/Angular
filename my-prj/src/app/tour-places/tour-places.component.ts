import { Component } from '@angular/core';
import { Tourist } from './Tourist';

@Component({
  selector: 'app-tour-places',
  templateUrl: './tour-places.component.html',
  styleUrl: './tour-places.component.css'
})
export class TourPlacesComponent {
  tarr:Tourist[]=[
    new Tourist("bjcsdyuo"),
    new Tourist("bjcsfhjd"),
    new Tourist("bjcdtjsd"),
    new Tourist("bjcsaesd"),
    new Tourist("bjcr4tsd")
  ]
}
