import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: any = [{ name: 'server', type: 'server', content: 'text' }];

  onAddServer2(event: { ServerName: string; ServerContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: event.ServerName,
      content: event.ServerContent,
    });
  }

  onAddBlueprint2(event: { ServerName: string; ServerContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.ServerName,
      content: event.ServerContent,
    });
  }
}
