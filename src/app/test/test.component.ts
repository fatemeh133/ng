import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  id: number = 23;
  name: string = 'fat';
  btnDisabled: boolean = true;
  inputType: string = 'text';
  inputValue: any = 'ss';
  imgUrl: string =
    'https://us.123rf.com/450wm/cc0collection/cc0collection2205/cc0collection220540385/186116070-dark-room-people-woman-girl-photography-photographer-camera-lens-outdoor-travel.jpg?ver=6';
  constructor() {
    setTimeout(() => {
      {
        this.btnDisabled = false;
      }
    }, 2000);
  }
  getID() {
    return this.id;
  }
  clickEvent() {
    alert('clicked');
  }
  logValue(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }
}
