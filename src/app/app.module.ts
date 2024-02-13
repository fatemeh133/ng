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
import { RendererHilightDirective } from './test/Directive/renderer-hilight.directive';
import { HideAfterDirective } from './test/Directive/hide-after.directive';

@NgModule({
  declarations: [AppComponent, TestComponent, RendererHilightDirective, HideAfterDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HighlightDirective],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
