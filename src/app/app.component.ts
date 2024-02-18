import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService],
})
export class AppComponent {
  title = 'ng';
  loopVar: number = 6;

  constructor(private UserService: UserService) {
    UserService.getdata();
  }
  getService() {
    this.UserService.api();
    console.log('get service test');
  }
  setData(name: string) {
    this.UserService.addname(name);
  }
  showData() {
    this.UserService.showName();
  }
}
