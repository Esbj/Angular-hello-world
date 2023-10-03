import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <form action="">
        <input type="text" placeholder="Filter by city" />
        <button class="primary">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      />
    </section>
  `,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HousingLocationComponent],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  housingLocationList: HousingLocation[] = [];
}
