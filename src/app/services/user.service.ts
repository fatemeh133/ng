import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  names: string[] = ['ali'];
  constructor(private logService: LogService) {}
  getdata() {
    console.log('LOG FROM SERVICE');
  }
  async api() {
    var response = await fetch('https://jsonplaceholder.typicode.com/photos/1');
    console.log(response.json());
  }
  addname(name: string) {
    this.names.push(name);
  }
  showName() {
    console.log(this.names);
    this.logService.logText();
  }
}
