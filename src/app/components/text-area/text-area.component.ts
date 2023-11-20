import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent {
  @Input({ required: true }) title!: string;
  @Input() placeholder!: string;
  @Input() text!: string;
  @Output() textChangeEvent = new EventEmitter<string>();  
  textArea = new FormControl();

  constructor() {
    this.textArea.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
      this.textChangeEvent.emit(this.text);
    });
  }

  async past() {    
    this.text = await navigator.clipboard.readText();
  }

  clear() {
    this.text = '';
  }
  
}
