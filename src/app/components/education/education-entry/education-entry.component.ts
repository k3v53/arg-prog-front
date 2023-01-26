import { Component } from '@angular/core';
import {
  faArrowsLeftRight,
  faSchool,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education-entry',
  templateUrl: './education-entry.component.html',
  styleUrls: ['./education-entry.component.css'],
})
export class EducationEntryComponent {
  faSuitCase = faSuitcase;
  faSchool = faSchool;
  faArrowsLeftRight = faArrowsLeftRight;
}
