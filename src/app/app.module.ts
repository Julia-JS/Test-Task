import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './tasks/task1/task1.component';
import { Task2Component } from './tasks/task2/task2.component';
import { Task3Component } from './tasks/task3/task3.component';
import { Task4Component } from './tasks/task4/task4.component';
import { Task5Component } from './tasks/task5/task5.component';
import { Task6Component } from './tasks/task6/task6.component';
import { Task7Component } from './tasks/task7/task7.component';
import { MyComponentComponent } from './tasks/task4/my-component/my-component.component';
import { ParentComponent } from './tasks/task4/parent/parent.component';
import { ImgFallbackDirective } from './tasks/task6/imgFallback.directive';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
    Task7Component,
    MyComponentComponent,
    ParentComponent,
    ImgFallbackDirective
  ],
    imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
