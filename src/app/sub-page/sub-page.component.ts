import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrl: './sub-page.component.css',

})
export class SubPageComponent implements OnInit {
  constructor(private dataService: LogService) {}
  text: string = 'mmm';
  ngOnInit() {
    // this.dataService.emitter.subscribe((val) => {
    //   this.text = val;
    // });
  }
}
