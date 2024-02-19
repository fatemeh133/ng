import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent {
  @Input() element = {
    name: 'ii',
    type: 'server',
    content: 'ii',
  };
  constructor() {}
}
