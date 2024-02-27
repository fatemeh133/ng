import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Interface } from 'readline';

interface userType {
  gender: 'male' | 'female';
  questionInput: string;
  select: string;
  username: string;
  email: string;
}

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
  genders = ['male', 'female'];
  user = {} as userType;
  IsSubmitted: boolean = false;

  onsubmit() {
    this.user.username = this.f?.value.userData.username;
    this.user.email = this.f?.value.userData.email;
    this.user.gender = this.f?.value.genderRadio;
    this.user.questionInput = this.f?.value.questionInput;
    this.user.select = this.f?.value.select;
    this.IsSubmitted = true;

    console.log('submited..');
    console.log(this.f);
  }
  setValue() {
    this.f?.setValue({
      genderRadio: 'male',
      questionInput: 'ff',
      select: 'selectthree',
      userData: { username: '12313', email: 'test@email.com' },
    });
  }
  patchValue() {
    this.f?.form.patchValue({ userData: { username: 'fateme' } });
  }
}
