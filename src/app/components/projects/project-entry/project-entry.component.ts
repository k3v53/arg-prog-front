import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css'],
})
export class ProjectEntryComponent {
  @Input() name: String = 'Project Name';
  @Input() techStack: Array<String> = ['Tech 1', 'Tech 2', 'Tech 3'];
}
