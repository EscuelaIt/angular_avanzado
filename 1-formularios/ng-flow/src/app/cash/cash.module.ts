import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms/';
import { Routes, RouterModule } from '@angular/router/';

const routes: Routes = [
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: '',
    redirectTo: 'new'
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewComponent]
})
export class CashModule { }
