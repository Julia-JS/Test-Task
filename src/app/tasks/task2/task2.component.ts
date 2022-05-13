import { Component, ElementRef, ViewChild } from '@angular/core';

const REGEXP: RegExp = /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.][0-9]{4}$/;

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html'
})
export class Task2Component {
  public isValid: boolean;
  @ViewChild('valid') valid: ElementRef;

  dateFormatCheck(value: string): boolean {
    this.isValid = REGEXP.test(value);
    this.valid.nativeElement.innerHTML = this.isValid;
    return this.isValid;
  }
}
