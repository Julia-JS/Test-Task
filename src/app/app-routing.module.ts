import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './tasks/task1/task1.component';
import { Task2Component } from './tasks/task2/task2.component';
import { Task3Component } from './tasks/task3/task3.component';
import { Task4Component } from './tasks/task4/task4.component';
import { Task5Component } from './tasks/task5/task5.component';
import { Task6Component } from './tasks/task6/task6.component';
import { Task7Component } from './tasks/task7/task7.component';

const routes: Routes = [
  {
    path: 'task1',
    component: Task1Component,
  },
  {
    path: 'task2',
    component: Task2Component,
  },
  {
    path: 'task3',
    component: Task3Component,
  },
  {
    path: 'task4',
    component: Task4Component,
  },
  {
    path: 'task5',
    component: Task5Component,
  },
  {
    path: 'task6',
    component: Task6Component,
  },
  {
    path: 'task7',
    component: Task7Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
