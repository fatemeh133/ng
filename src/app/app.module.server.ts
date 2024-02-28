import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule],
})
export class AppServerModule {}
