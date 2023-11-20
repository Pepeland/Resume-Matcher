import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent {
  @Input({ required: true }) title!: string;
  @Input() placeholder!: string;
  @Input() text!: string;
  @Output() textChangeEvent = new EventEmitter<string>();  

  onTextareaChange(input: any) {            
    this.textChangeEvent.emit(this.text);
  }

  async past() {    
    this.text = await navigator.clipboard.readText();
    this.textChangeEvent.emit(this.text);
  }

  clear() {
    this.text = '';
    this.textChangeEvent.emit(this.text);
  }
  
}
