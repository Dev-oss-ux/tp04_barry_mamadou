import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  postClient(client: any) {
    console.log(client);
  }

  getClient() {

  }

  postLogin(login: any) {
  }
}
