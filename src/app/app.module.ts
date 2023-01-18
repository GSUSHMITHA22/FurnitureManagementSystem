import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FurnitureComponent,
    FurnitureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
