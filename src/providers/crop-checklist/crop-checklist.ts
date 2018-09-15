import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const KEY = 'crop.checklist';

interface Item {
  task:string,
  date:Date,
  complete?:boolean
}

/*
  Generated class for the CropChecklistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CropChecklistProvider {

  constructor(private storage: Storage) {

  }

  currentCrop(crop?) {
    if(crop) {
      return this.storage.set('currentCrop', crop);
    } else {
      return this.storage.get('currentCrop');
    }
  }

  async addTask(task, date:Date) {
    const items:Item[] = await this.storage.get(KEY) || [];
    items.push({
      complete: false,
      date,
      task
    });

    items.sort((a:any,b:any) => a.date - b.date);

    return this.storage.set(KEY, items);
  }

  getItems(): Promise<Item[]> {
    return this.storage.get(KEY);
  }

  async getLastestItem() {
    const items = await this.getItems();
    const incomplete = items.filter(x => !x.complete);

    return incomplete.length ? incomplete[0]: null;
  }

}
