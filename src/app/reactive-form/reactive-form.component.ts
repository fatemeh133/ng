import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  formG: FormGroup;

  ngOnInit() {
    this.formG = new FormGroup({
      username: new FormControl('s'),
      email: new FormControl('s@'),
      gender: new FormControl('female'),
    });
  }
}
