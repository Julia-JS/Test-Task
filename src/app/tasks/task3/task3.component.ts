import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html'
})
export class Task3Component {
  private arg1: string = 'argument1';
  private arg2: string = 'argument2';
  private arg3: string = 'argument3';

  run(): void {
    setTimeout(this.myFunc, 1000, this.arg1, this.arg2, this.arg3);
  }

  myFunc(arg1: string, arg2: string, arg3: string): void {
    alert(`${arg1}, ${arg2}, ${arg3}`);
  }
}
