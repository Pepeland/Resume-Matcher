import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keywords',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keywords.component.html',
  styleUrl: './keywords.component.scss'
})
export class KeywordsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) color!: string;
  @Input() items!: Map<string, number>;
}
