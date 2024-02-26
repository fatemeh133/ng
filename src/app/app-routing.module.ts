import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { SubPageComponent } from './sub-page/sub-page.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/Test2Page', pathMatch: 'full' },
  { path: 'Test2Page', component: Test2Component },
  {
    path: 'Test2Page/:id',
    component: Test2Component,
    children: [{ path: 'sub-page', component: SubPageComponent }],
  },
  { path: 'Test', component: TestComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
