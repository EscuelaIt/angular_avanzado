import { CommonModule } from '@angular/common';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router/';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './../home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './../about/about.module#AboutModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    MainContentComponent,
    ShellComponent,
    TopBarComponent
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
