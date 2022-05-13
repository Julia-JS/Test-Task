import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html'
})
export class Task1Component {
  public array: Array<number> = [];
  public nonUniqueArray: Array<number> = [];
  @ViewChild('initialArray') initialArray: ElementRef;
  @ViewChild('finalArray') finalArray: ElementRef;

  find(): void {
    this.array = this.initialArray.nativeElement.value.split(',');
    this.nonUniqueArray = this.func(this.array);
    this.finalArray.nativeElement.innerHTML = `[${this.nonUniqueArray}]`;
  }

  // way 1
  private func(array: Array<number>): Array<number> {
    const dublicatsArray = array.filter(a => array.indexOf(a) !== array.lastIndexOf(a));
    const dublicatsArrayFiltered = dublicatsArray.filter((a, i) => dublicatsArray.indexOf(a) === i);
    return dublicatsArrayFiltered;
  }

  // way 2
  // private func(array: Array<number>): Array<number> {
  //   const dublicats = Array.from(new Set(array.filter(a => array.filter(b => a === b).length > 1)));
  //   return dublicats;
  // }

  // way 3
  // private func(array: Array<number>): Array<number> {
  //   const dublicatsArray = array.map(a => {
  //     return {el: a, length: array.filter(b => a === b)};
  //   });
  //   const dublicatsArrayFiltered = [...new Set(dublicatsArray.filter(a => a.length.length > 1).map(a => a.el))];
  //   return dublicatsArrayFiltered;
  // }
}
