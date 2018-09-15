import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const API_ENDPOINT = '/api/weather';

@Injectable()
export class WeatherProvider {

  constructor(private http:HttpClient) {
  }

  currentWeather(lat, lon) {
    return this.http.get(API_ENDPOINT, {
      params: {
        lat,
        lon,
      }
    });
  }

}
