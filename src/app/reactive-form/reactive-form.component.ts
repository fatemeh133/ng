import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];

  profileForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
  });

  ngOnInit() {}
  onSubmit() {
    console.log(this.profileForm);
  }
}
