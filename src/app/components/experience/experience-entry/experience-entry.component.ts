import { Component, Input } from '@angular/core';
import {
  faArrowsLeftRight,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/model/experiencia.model';

@Component({
  selector: 'app-experience-entry',
  templateUrl: './experience-entry.component.html',
  styleUrls: ['./experience-entry.component.css'],
})
export class ExperienceEntryComponent {
  faSuitCase = faSuitcase;
  faArrowsLeftRight = faArrowsLeftRight;
  @Input() experience = new Experiencia(
    'Titulo',
    'Empleador',
    0,
    1,
    'Descripcion'
  );
}
