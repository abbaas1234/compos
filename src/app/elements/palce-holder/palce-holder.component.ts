import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-palce-holder',
  templateUrl: './palce-holder.component.html',
  styleUrl: './palce-holder.component.css'
})
export class PalceHolderComponent {
  @Input() lines: number = 4;
  @Input() header: boolean = true;
}
