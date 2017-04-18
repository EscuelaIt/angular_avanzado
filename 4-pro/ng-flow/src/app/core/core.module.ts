import { CommonModule } from '@angular/common';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router/';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { HttpModule, Http } from "@angular/http/";

const routes: Routes = [
  {
    path: '',
    loadChildren: './../home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './../about/about.module#AboutModule'
  },
  {
    path: 'cash',
    loadChildren: './../cash/cash.module#CashModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
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
