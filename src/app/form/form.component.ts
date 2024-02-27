import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @ViewChild('f') f: NgForm | null = null;
  defaultOption = 'selectthree';
  exampleEmail = 'test@email.com';
  answer = 'ff';
  onsubmit() {
    console.log('submited..');
    console.log(this.f);
  }
}
