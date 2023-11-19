import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-keywords',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './keywords.component.html',
  styleUrl: './keywords.component.scss'
})
export class KeywordsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) color!: string;
  @Input() items!: Map<string, number>;

  toast = false;
  toastMsg = "";
  toastTimeout: any;

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.toast = true;
    this.toastMsg = `${text} copied to clipboard.`;
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast = false;      
    }, 2000);
  }
}
