import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable, filter, from, map, of } from 'rxjs';
import { error, log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService],
})
export class AppComponent {
  title = 'ng';
  loopVar: number = 6;
  // myObservable = new Observable((subs) => {
  //   subs.next('1 observed');
  //   subs.next('2 observed');
  //   // subs.error(new Error('Errrrrrrrrror!!'));
  //   subs.complete();
  // });
  myObservable = new Observable((subs) => {
    subs.next('1 observed');
    subs.next('2 observed');
    // subs.error(new Error('Errrrrrrrrror!!'));
    subs.complete();
  });

  array = [10, 20, 30];
  result = from(this.array).pipe(
    map((v) => {
      return v * 2;
    }),
    filter((v) => {
      return v > 30;
    })
  );
  result2 = of(this.array);

  constructor(private UserService: UserService) {
    UserService.getdata();

    // old boservable

    // this.myObservable.subscribe(
    //    (n) => {
    //     console.log(n);
    //   },
    //   (e) => {
    //     alert(e.message);
    //   },
    //   () => {
    //     console.log('observable compeleted');
    //   }
    // );

    // new way

    // this.myObservable.subscribe({
    //   next: (n) => {
    //     console.log(n);
    //   },
    //   error: (e) => {
    //     alert(e.message);
    //   },
    //   complete: () => {
    //     console.log('observable compeleted');
    //   },
    // });

    this.result.subscribe((x) => console.log(x));
    this.result2.subscribe((x) => console.log(x));
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
