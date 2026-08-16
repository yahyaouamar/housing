import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location/housing-location';
import { HousingService } from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  housingService: HousingService = inject(HousingService);

  housingLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingLocationList =
      this.housingService.getAllHousingLocations();
  }
}
