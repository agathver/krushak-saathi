import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const USER_KEY = 'user.current';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(private storage:Storage) {
  }

  currentUser() {
    return this.storage.get(USER_KEY);
  }

  login(data) {
    return this.storage.set(USER_KEY, data);
  }

}
