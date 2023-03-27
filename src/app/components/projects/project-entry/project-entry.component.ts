import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css'],
})
export class ProjectEntryComponent {
  @Input() name: String = 'Project Name';
  @Input() techStack: Array<String> = ['Tech 1', 'Tech 2', 'Tech 3'];
  @Input() proyecto: Proyecto = new Proyecto(
    'Titulo',
    'Descripción',
    'https://plchldr.co/i/500x250?bg=111111',
    ''
  );
}
