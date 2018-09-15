import { Component, Input } from '@angular/core';
import { WeatherProvider } from '../../providers/weather/weather';

const toCelsius = x => x - 273.15;

/**
 * Generated class for the CurrentWeatherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'current-weather',
  templateUrl: 'current-weather.html'
})
export class CurrentWeatherComponent {

  place: string;
  description: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  precipitation: number;
  icon: string;

  @Input() lat: number;
  @Input() lon: number;

  constructor(private weather:WeatherProvider) {
  }

  ngOnInit() {
    this.weather.currentWeather(this.lat, this.lon)
    .subscribe((data:any) => {
      this.place = data.name;
      this.description = data.weather[0].description;
      this.currentTemp = toCelsius(data.main.temp);
      this.maxTemp = toCelsius(data.main.temp_max);
      this.minTemp = toCelsius(data.main.temp_min);
      this.precipitation = data.rain['3h']
      this.icon = data.weather[0].id
    });
  }

}
