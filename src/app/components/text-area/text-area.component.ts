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
  @Output() textChangeEvent = new EventEmitter<string>();
  textAreaValue: string = '';

  onTextareaChange(input: any) {            
    this.textChangeEvent.emit(this.textAreaValue);
  }

  async past() {    
    this.textAreaValue = await navigator.clipboard.readText();
    this.textChangeEvent.emit(this.textAreaValue);
  }

  clear() {
    this.textAreaValue = '';
    this.textChangeEvent.emit(this.textAreaValue);
  }
  
}
