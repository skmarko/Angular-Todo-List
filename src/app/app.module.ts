import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './my_work/todo/todo.component';
import { MytodoComponent } from './mytodo/mytodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MytodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
