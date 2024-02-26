import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  onsubmit(f: any) {
    console.log('submited..');
    console.log(f);
  }
}
