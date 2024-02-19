import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent {
  newServerName: any = '';
  @ViewChild('newServerContent') newServerContent: any = '';
  @Output() serverEvent = new EventEmitter<{
    ServerName: string;
    ServerContent: string;
  }>();
  @Output() bluePrintEvent = new EventEmitter<{
    ServerName: string;
    ServerContent: string;
  }>();
  @Input() text: string = '';
  constructor() {}

  onAddServer(newServerName: any) {
    this.serverEvent.emit({
      ServerName: newServerName.value,
      ServerContent: this.newServerContent.nativeElement.value,
    });
  }

  onAddBlueprint(newServerName: any) {
    this.bluePrintEvent.emit({
      ServerName: newServerName.value,
      ServerContent: this.newServerContent.nativeElement.value,
    });
  }

  ngDoCheck() {
    console.log('onghange');
  }
}
