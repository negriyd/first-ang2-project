import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app-root/app.component';
import {Counter} from './components/counter/counter.component';
import {HeroList} from "./components/heroList/heroList.component";

@NgModule({
  declarations: [
    AppComponent,
    Counter,
    HeroList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
