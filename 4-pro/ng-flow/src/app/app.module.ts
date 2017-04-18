import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'app/core/core.module';
import { NgModule } from '@angular/core';
import { ShellComponent } from './core/shell/shell.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
