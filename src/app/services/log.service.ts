import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}
  emitter = new EventEmitter<string>();
  logText() {
    console.log('log service works');
  }
  // emiterfunc(value: string) {
  //   this.emitter.emit(value);
  // }
}
