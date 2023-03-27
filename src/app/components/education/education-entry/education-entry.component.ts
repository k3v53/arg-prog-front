import { Component, Input } from '@angular/core';

import {
  faArrowsLeftRight,
  faSchool,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-education-entry',
  templateUrl: './education-entry.component.html',
  styleUrls: ['./education-entry.component.css'],
})
export class EducationEntryComponent {
  faSuitCase = faSuitcase;
  faSchool = faSchool;
  faArrowsLeftRight = faArrowsLeftRight;
  @Input() education = new Educacion(
    'Titulo',
    'Institución',
    0,
    1,
    'Descripción'
  );
}
