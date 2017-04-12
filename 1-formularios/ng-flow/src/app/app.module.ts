import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'app/core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ShellComponent } from './core/shell/shell.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
