import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface HousingLocationInfo {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}