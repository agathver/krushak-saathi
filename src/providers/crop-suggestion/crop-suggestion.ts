import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CropSuggestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CropSuggestionProvider {

  constructor(public http: HttpClient) {
  }

  cropSuggestions() {
    return [
      { id: 'rice', name: 'Rice' },
      { id: 'wheat', name: 'Wheat'},
      { id: 'legumes', name: 'Legumes' },
      { id: 'Onion', name: 'Onion' }
    ];
  }

  seedVendorSuggestion(crop) {
    return [
      {
        name: 'Shri Balaji Beej Bhandar',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3200
      },
      {
        name: 'Shri Krishna Beej Bhandar',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3180
      },
      {
        name: 'Amarjit Singh & Co',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3170
      },
      {
        name: 'Shri Sai Seeds',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3180
      },
      {
        name: 'Gurgaon Trading Company',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3200
      },
      {
        name: 'Vaishnavi Traders',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3160
      },
      {
        name: 'Kisan Khad Beej Bhandar',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3170
      },
      {
        name: 'Shri Bajrang Agro Agency',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3180
      },
      {
        name: 'Manish Traders',
        coords: {
          lat: 28.4892409,
          lon: 77.0386952
        },
        price: 3190
      },
      {
        name: 'Goyal Krishi Store',
        coords: {
          lat: 28.518529,
          lon: 77.1435511
        },
        price: 3250
      },
      {
        name: 'Vikas Krishi Store',
        coords: {
          lat: 28.457762,
          lon: 77.1493341
        },
        price: 3200
      },
      {
        name: 'Ganesh Seeds',
        coords: {
          lat: 28.457762,
          lon: 77.1493341
        },
        price: 3200
      }
    ]
  }

  soilPreparation(crop) {
    return [
      'At dry field condition, apply glyphosate to kill weeds and for better field hygiene.',
      'Irrigate the field',
      'Maintain standing water at 2−3 cm level for about 3−7 days or until it is soft enough and suitable for an equipment to be used.',
      'Plow or rotovate the field to incorporate stubbles and hasten decomposition.'

    ];
  }

  dailyGuide(crop) {
    return [
      'Weed cleaning',
      'None',
      'None',
      'Field flooding',
      'Floooding',
      'Empyting water',
      'Not required (rain)',
      'None',
      'Harvest'
    ]
  }

  mandi(crop) {

  }
}
