import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './Directive/highlight.directive';
import { RendererHilightDirective } from './Directive/renderer-hilight.directive';
import { HideAfterDirective } from './Directive/hide-after.directive';
import { Test2Component } from './test2/test2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubPageComponent } from './sub-page/sub-page.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, TestComponent, RendererHilightDirective, HideAfterDirective, Test2Component, NotFoundComponent, SubPageComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HighlightDirective],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
