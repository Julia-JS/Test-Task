import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyComponentComponent implements OnChanges {
  public array: Array<number> = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 10)
  );
  public items = this.array;
  @Input() param;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.param.previousValue !== changes.param.currentValue) {
      this.items = this.param === '' ? this.array : this.array.filter((x) => x === +this.param);
    }
  }
}
