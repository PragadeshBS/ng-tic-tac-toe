import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button
    class="text-light"
    [ngClass]="{ 'bg-success': value === 'X', 'bg-primary': value === 'O' }"
    [ngStyle]="{ backgroundColor: 'white', border: 0 }"
  >
    {{ value }}
  </button>`,
  styles: ['button {width: 100%; height: 100%; font-size: 5rem}'],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
  constructor() {}
}
