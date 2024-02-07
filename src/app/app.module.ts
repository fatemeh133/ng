import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './test/Directive/highlight.directive';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HighlightDirective],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
