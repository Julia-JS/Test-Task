import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  public value;

  public changeInputValue(e: Event): void {
    this.value = (e.target as HTMLTextAreaElement).value;
  }
}
