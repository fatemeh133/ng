import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}
  logText() {
    console.log('log service works');
  }
}
