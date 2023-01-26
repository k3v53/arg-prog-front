import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-entry',
  templateUrl: './language-entry.component.html',
  styleUrls: ['./language-entry.component.css'],
})
export class LanguageEntryComponent {
  @Input() name: string = 'Language';
  @Input() expertise: string = 'Native';
}
